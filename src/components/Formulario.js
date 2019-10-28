import React, { Component } from 'react';

class Formulario extends Component{

    render(){
        return( 
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
