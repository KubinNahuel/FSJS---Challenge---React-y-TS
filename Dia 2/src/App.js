
import './App.css';
import Productos1 from './Challenge/Componente1';
import Productos2 from './Challenge/Componentes2';
import Productos3 from './Challenge/Componente3';
import NavBar from './Challenge/navBar';
import Fecha from './Challenge/fecha';
import Resumen from './Challenge/resumen';


import { useState } from 'react';



 
function App() {
  const [categoria, setCategoria]=useState("");
  let variable;
  switch(categoria){
    case "Pelotas":
      variable= <Productos1/>
      break;
    case "Raquetas":
      variable= <Productos2/>
      break;
    case "Gorras":
      variable=<Productos3/>
      break;
    case "Fecha":
      variable= <Fecha/>
      break;
    case "Resumen":
      variable=<Resumen/>
  }
  return (
    <div className="App">
      <header className="App-header">
      <NavBar setCategoria= {setCategoria}/>
      </header>
      {variable}
    </div>
  )
}

export default App;
// root.render(myFirtsElement);

// var input1=parseInt(prompt("Elije 1 numero"));
// var input2=parseInt(prompt("Elija 2 numero"));
// const cuenta= <h1>El resultado de su suma es {input1 + input2}</h1>
// root.render(cuenta);
// const users = [
//   {name: "John Doe", id: 1},
//   {name: "jane doe", id: 2},
//   {name: "JAJAJAJ", id: 3}
// ];

// function myArray(){
//   return (
//       <div className='usuarios'>
//       <h3>Nombre de usuario</h3>
//       <ul>
//           {
//               users.map(element => {
//                   return(
//                       <li>
//                           {element.name}
//                       </li>
//                   )
//               })
//           }
//       </ul>
//       </div>
//   )
// }




// root.render(myArray());