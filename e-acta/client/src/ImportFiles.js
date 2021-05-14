import React, { useState, useRef, useEffect } from "react";
import {csv} from 'd3';
import Papa from "papaparse";
import axios from 'axios';

const ImportFiles = () => {
  const [image, setImage] = useState("");
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
  useEffect(() =>{
        if(!image) return null;
        Papa.parse(image, { // 1 puta hora para esto :(
            complete: function(results) {
                console.log(results);
                console.log("Primer alumno",results.data[0][0])
                console.log("Nota Primer alumno",results.data[0][1])
                
            }
        });
        
      
  },[image])
  useEffect(async () =>{
    let user = await axios.get('/app/api/usuarios/2');
    let asig = await axios.get('/app/api/asignaturas/3');
    const nota = {
      usuario: user.data,
      asignatura: asig.data,
      nota: 6
    }
    let response = await axios.get('/app/api/notas');
    //console.log("OBJETO", response.data)
    //console.log("JSON", JSON.stringify(response.data))
    /*let response = await axios.post('/app/api/notas',{nota}); // el nombre de la variable no importa, y el formato es {"nombre" : "valor"}
    console.log("notas", response)*/
  },[])

  const onButtonClick = () => {
    inputFile.current.click();
  };

  console.log("imageimage", image);
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