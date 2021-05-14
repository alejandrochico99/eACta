import React, { useState, useRef, useEffect } from "react";
import {csv} from 'd3';
import Papa from "papaparse";
import axios from 'axios';

const ImportFiles = (nombre) => {
  const [image, setImage] = useState("");
  const [nombreasig, setNombre] = useState(nombre);
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

      setImage(files[0]);
    }
  };
  useEffect( async () =>{
        if(!image) return null;
        var csv;
        var objnotas=[];
        Papa.parse(image, { // 1 puta hora para esto :(
            complete: function(results) {
                csv = results.data
                console.log(results);
                console.log("Primer alumno",results.data[0][0])
                console.log("Nota Primer alumno",results.data[0][1])
                
            }
        });
        //OBTENEMOS ID ASIG
        let idasig = 0;
        let responseasig = await axios.get('/app/api/asignaturas');
        const asignaturas = responseasig.data;
        //console.log("Asignaturas", asignaturas);
        asignaturas.forEach(element => {
            //console.log("elemento asignaturas", element)
            //console.log("nombre props", this.props.nombre)
            if(nombreasig.nombre == element.nombreAsignaturas){
                idasig = element.id;
                console.log("id",idasig);
            }
        });
        //obtenemos id de los alumnos del csv, que son los mismos que los de la bbdd...
        if(idasig){
          var statealumnos = [];
          let responseasignatura = await axios.get('/app/api/notas/asignaturas/' + idasig)
          console.log("responseasignatura",responseasignatura.data)
          var data = responseasignatura.data;
          console.log("alumnosimport",data)
          data.forEach(element => {
            csv.forEach(c => {
                if(element.usuario.nombre == c[0]){
                  console.log("c",c[0])
                  console.log("e",element.usuario.nombre)
                  objnotas.push({"user":element.usuario.id,"nota":c[1]})
                }
            });
            statealumnos.push(element.usuario.id)
          });
          console.log("statesss",objnotas)
        }
        await objnotas.forEach( async (d) => {
          console.log('/app/api/notas/put/alumno/'+d.user+'/'+idasig+'/'+d.nota)
            let response = await axios.put('/app/api/notas/put/alumno/'+d.user+'/'+idasig+'/'+d.nota);
      });  
  },[image])
  useEffect(async () =>{
    /*let user = await axios.get('/app/api/usuarios/2');
    let asig = await axios.get('/app/api/asignaturas/3');
    const nota = {
      usuario: user.data,
      asignatura: asig.data,
      nota: 6
    }
    let response = await axios.get('/app/api/notas');*/
    //console.log("OBJETO", response.data)
    //console.log("JSON", JSON.stringify(response.data))
    /*let response = await axios.post('/app/api/notas',{nota}); // el nombre de la variable no importa, y el formato es {"nombre" : "valor"}
    console.log("notas", response)*/
  },[])

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        //accept=".zip,.rar"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
      <div className="button" onClick={onButtonClick}>
        Upload
      </div>
    </div>
  );
};

export default ImportFiles;