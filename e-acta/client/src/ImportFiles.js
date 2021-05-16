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

                
            }
        });
        //OBTENEMOS ID ASIG
        let idasig = 0;
        let responseasig = await axios.get('/app/api/asignaturas');
        const asignaturas = responseasig.data;

        asignaturas.forEach(element => {
            if(nombreasig.nombre == element.nombreAsignaturas){
                idasig = element.id;
               
            }
        });
        //obtenemos id de los alumnos del csv, que son los mismos que los de la bbdd...
        if(idasig){
          var statealumnos = [];
          let responseasignatura = await axios.get('/app/api/notas/asignaturas/' + idasig)
          
          var data = responseasignatura.data;
          
          data.forEach(element => {
            csv.forEach(c => {
                if((element.usuario.nombre == c[0]) && (element.usuario.apellidos == c[1])){
                 
                  objnotas.push({"user":element.usuario.id,"nota":c[2]})
                }
            });
            statealumnos.push(element.usuario.id)
          });
        
        }
        await objnotas.forEach( async (d) => {
          
            let response = await axios.put('/app/api/notas/put/alumno/'+d.user+'/'+idasig+'/'+d.nota);
      });  
  },[image])
  useEffect(async () =>{
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