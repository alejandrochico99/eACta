import React, { useState, useRef, useEffect } from "react";
import {csv} from 'd3';
import Papa from "papaparse";

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
  useEffect(()=>{
        Papa.parse(image, { // 1 puta hora para esto :(
            complete: function(results) {
                console.log(results);
                console.log("Primer alumno",results.data[0][0])
                console.log("Nota Primer alumno",results.data[0][1])
            }
        });

        //Hacer un push a la bbdd guardando en ALumnoHasNOta los datos de este archivo
  },[image])

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