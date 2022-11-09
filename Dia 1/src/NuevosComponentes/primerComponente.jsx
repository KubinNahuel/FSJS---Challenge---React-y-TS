import React from "react";

class Car extends React.Component{
  render(){
    return <h2>Soy un auto</h2>
  }
}

const CarR= (props) =>{
  return(
<h1>Soy un auto {props.brand}</h1>
)
}

const Garage= () =>{
  return(
    <>
    <h2>¿Quien sos vos?</h2>
    <CarR brand="rojo"/>
    </>
  )
}
export default Garage;