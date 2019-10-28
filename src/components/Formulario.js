import React, { Component } from 'react';

class Formulario extends Component{

    //ref son para leer comapos de un formulario

    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();

    cotizarSeguro = (e) => {
        e.preventDefault();
        
        //leer el plan
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';

        //obtener los datos
        console.log(this.marcaRef.current.value);

        //crear objetos
        const infoAutos = {
            marca : this.marcaRef.current.value,
            year : this.yearRef.current.value,
            plan : plan
        }
        console.log(infoAutos);
        //enviarlo al component principal
    }

    render(){
        return( /*puedo evitar esta linea this.cotizarSeguro.bind(this) por esta this.cotizarSeguro -- siempre y cuando en mi metodo cotizarSeguro este escrito de la siguiente manera para que no pierda el scope ,aqui va el codigo antiguo
         cotizarSeguro(e){
            e.preventDefault();
            console.log(this.marcaRef.current.value);  
        } 
        y aqui el codigo refactorizado para que no pierda el scope
         cotizarSeguro = (e) => {
            e.preventDefault();
            console.log(this.marcaRef.current.value);
        }
        */
            <form onSubmit={ this.cotizarSeguro }> 
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Plan</label>
                    <input type="radio" name="plan" value="basico"  ref={this.planBasicoRef} />Básico
                    <input type="radio" name="plan" value="completo" ref={this.planCompletoRef} />Completo
                </div>

                <button type="submit">Cotizar</button>
            </form>
        )
    }
}

export default Formulario;
