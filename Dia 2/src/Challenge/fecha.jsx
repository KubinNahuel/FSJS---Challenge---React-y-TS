import React,{useState} from "react";
function Fecha(){
    const [fecha, setFecha] = useState();


function btnFecha() {
        
    let dia = new Date();
    let ahora = dia.toLocaleString();
    setFecha(ahora)
    
}

return(
    <>
    <button onClick={btnFecha}>Que fecha es?</button>
    <p>{fecha}</p>
    </>
    )
}

export default Fecha