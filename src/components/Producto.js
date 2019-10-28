import React from 'react';

function Producto(props){
    
        const {nombre, precio} = props.producto
        return(
            <div>
                <h1>{nombre}</h1>
                <p> S/. {precio}</p>
            </div>
        )
    
 }

 export default Producto;