exports.users = [{
        "id": 0,
        "name": "Javier Moro Ribera",
        "email": "javier.morori@alumnos.upm.es",
        "password": "Isst2021",
        "role":{
            "name": "tribunal",
            "asignaturas":[
            {
                "name": "ISST",
                "alumnos_id": [3, 4, 5],
                "firmado": false
            },
            {
                "name": "ECOM",
                "alumnos_id": [4,5],
                "firmado": false
            },
            {
                "name": "RSRD",
                "alumnos_id": [3,5],
                "firmado": false
            }
            ]
        },
        "role2": {
            "name": "coordinadorx",
            "asignaturas": [
                {
                    "name": "ECOM", // Se añadiría otro campo donde se almacenarían los nombres de las diferentes actas hechas.
                    "profesores_id": [0, 1],
                    "verificado": false, // Luego con eso se buscaría el fichero correspondiente pej. un csv que se muestra con pandas (python)

                },
                {
                    "name": "RSRD",
                    "profesores_id": [0, 1],
                    "verificado": false,
                }
            ]
        },
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    },
    {
        "id": 1,
        "name": "Elvira Moreno Sanchez",
        "email": "e.msanchez@alumnos.upm.es",
        "password": "Isst2021",
        "role":{
            "name": "tribunal",
            "asignaturas":[
            {
                "name": "RSRD",
                "alumnos_id": [6, 8],
                "firmado": false
            },
            {
                "name": "ECOM",
                "alumnos_id": [7, 8],
                "firmado": false
            },
            {
                "name": "ISST",
                "alumnos_id": [6, 7],
                "firmado": false // Esta mas bien seria donde se guarde el nombre de la acta hecha
            }
            ]
        },
        "role2":{
            "name": "coordinadorx",
            "asignaturas": [
                {
                    "name": "ISST", // Se añadiría otro campo donde se almacenarían los nombres de las diferentes actas hechas.
                    "profesores_id": [0, 1],
                    "verificado": false, // Luego con eso se buscaría el fichero correspondiente pej. un csv que se muestra con pandas (python)

                }
            ]
        },
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    },
    {
        "id": 2,
        "name": "Christian Santiago Moreno",
        "email": "christian.santiago.moreno@alumnos.upm.es",
        "password": "Isst2021",
        "role":{
            "name": "secretaria",
            "Asignaturas":[
                {
                    "name":"ECOM",
                    "acta":"",
                    "estado":false
                },
                {
                    "name":"ISST",
                    "acta":"",
                    "estado":false
                },
                {
                    "name":"RSRD",
                    "acta":"",
                    "estado":false
                }
            ]
        },
        "role2": null,
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    },
    {
        "id": 3,
        "name": "Alejandro Chico Moreno",
        "email": "alejandro.chico.moreno@alumnos.upm.es",
        "password": null,
        "role": {
            "name": "estudiante",
            "asignaturas":[
                {
                    "name":"ISST",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                },
                {
                    "name":"RSRD",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                }
            ]
        },
        "role2": null,
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    },
    {
        "id": 4,
        "name": "Pablo Ruiz Ruiz",
        "email": "p.rruiz@alumnos.upm.es",
        "password": "Isst2021",
        "role":  {
            "name": "estudiante",
            "asignaturas":[
                {
                    "name":"ISST",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                },
                {
                    "name":"ECOM",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                }
            ]
        },
        "role2": null,
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    },
    {
        "id": 5,
        "name": "Andrés Zambrana Valle",
        "email": "a.zambrana@alumnos.upm.es",
        "password": "Isst2021",
        "role":  {
            "name": "estudiante",
            "asignaturas":[
                {
                    "name":"ISST",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                },
                {
                    "name":"ECOM",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                },
                {
                    "name":"RSRD",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                }
            ]
        },
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    },
    {
        "id": 6,
        "name": "Javier Antonio Moro Sevilla",
        "email": "javier.antonio.msevi@alumnos.upm.es",
        "password": null,
        "role":  {
            "name": "estudiante",
            "asignaturas":[
                {
                    "name":"RSRD",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                },
                {
                    "name":"ISST",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                }
            ]
        },
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    },
    {
        "id": 7,
        "name": "María Bajo Fernández",
        "email": "m.bajo.fernandez@alumnos.upm.es",
        "password": null,
        "role":  {
            "name": "estudiante",
            "asignaturas":[
                {
                    "name":"ECOM",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                },
                {
                    "name":"ISST",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                }
            ]
        },
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    },
    {
        "id": 8,
        "name": "Carlos Compagni Morán",
        "email": "carlos.compmora@alumnos.upm.es",
        "password": null,
        "role":  {
            "name": "estudiante",
            "asignaturas":[
                {
                    "name":"RSRD",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                },
                {
                    "name":"ECOM",
                    "nota_1Parcial": "",
                    "nota_2Parcial": "",
                    "final":""
                }
            ]
        },
        "attachment": {
            "filename": null,
            "mime": "image/jpeg",
            "dir": null
        }
    }

]