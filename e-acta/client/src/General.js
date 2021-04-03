import React from 'react';
import ReactDOM from 'react-dom';

export default class General extends React.Component {
  render() {
    const mystyle = { //pruebas
        height:"70vh",
        display: "flex",
        flexdirection: "row",
        justifycontent: "flex-start",
      };
    return (
        <div style={mystyle}>
        <nav>
            <button >General</button>
            <button>Asignaturas</button>
            <button>Mis Datos</button>
            <button>Configuración</button>
        </nav>
        <section>
            <h1>Contenido</h1>
            <p>Aquí se colocará el Contenido </p>
        </section>
        <aside>
            <div class="user-panel">
                <h1>Panel de usuario</h1>
                <div>
                    <p>Aqui va la información del usuario</p>
                </div>
            </div>
            <div class="general-help">
                <button>Ayuda</button>
                <button>Contacto</button>
            </div>
        </aside>
    </div>
    );
  }
}