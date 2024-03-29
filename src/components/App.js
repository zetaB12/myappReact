import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component{

    cotizarSeguro = (datos) => {
        console.log(datos);
    }
    render(){
        return(
            <div className="contenedor">
                <Header titulo = 'Cotizador de seguros de Autos'/>
                <Formulario 
                    cotizarSeguro = {this.cotizarSeguro}
                />
            </div>
        )
    }
}

export default App;