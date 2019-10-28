import React from 'react';
import '../css/App.css';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';

function App(){
  const productos = [
    {nombre : 'Libro', precio : 100},
    {nombre : 'Cd', precio : 50},
    {nombre : 'Manzana', precio : 20},
    {nombre : 'Chompa', precio : 130}
  ]
  return (
    <div>
    <Header
      titulo="Nuestra tienda virtual" />
    <Productos 
      productos = {productos}/>
    <Footer />
    
    
    </div>
    
  )
}

export default App;
