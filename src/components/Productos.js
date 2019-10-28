import React, {Component} from 'react';
import Producto from './Producto';

class Productos extends Component{//como tenemos que imprimir varios productos y es repetitivo debemos crear otro componente llamado producto.js
    render(){
        return(
            <div>
            <h2>Listado de Productos</h2>
            { Object.keys(this.props.productos).map(key => (
                <Producto 
                    key = {key}
                    producto = {this.props.productos[key]}
                />
            ))}
            </div>
        )
    }
   
}

export default Productos;
