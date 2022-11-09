import React, { Component } from 'react'


const NavBar= (props) => {

function cambiarTipo(e){
  props.setCategoria(e.target.textContent);
 }
    return (
    <>
        <ul>
            <li><a href='#inicio' onClick={cambiarTipo}>Inicio</a></li>
            <li><a href='#pantalon' onClick={cambiarTipo}>Pelotas</a></li>
            <li><a href='#raquetas' onClick={cambiarTipo}>Raquetas</a></li>
            <li><a href='#gorras' onClick={cambiarTipo}>Gorras</a></li>
            <li><a href='#fecha' onClick={cambiarTipo}>Fecha</a></li>
            <li><a href='#Resumen' onClick={cambiarTipo}>Resumen</a></li>
        </ul>
    </>
)
}





// export const Button =() =>{
//     return (
//         <button onClick={e => cambiarCategoria(Productos1)}></button>

//     )
// }
export default NavBar