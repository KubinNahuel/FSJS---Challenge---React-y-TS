import React from "react";
const listPelotas=[
{nombre: "Wilson", Precio: "20$", descripcion:"Pelotas de tennis marca wilson"},
{nombre: "Head", Precio: "15$", descripcion:"Pelotas de tennis marca Head" },
{nombre: "Topper", Precio: "14$", descripcion:"Pelotas de tennis marca Topper"}
]

const Productos1=()=>{
    return(
        <>
        <h1>Pelotas</h1>
            <div className="card-container">
                {listPelotas.map((element,index) => {
                    return(
                     <div className="card" key={index}>
                        <h1>{element.nombre}</h1>
                        <img src='https://picsum.photos/200/300'/>
                        <p>{element.precio}</p>
                        <p>{element.descripcion}</p>
                    </div>
            )
        })}
        </div>
        </>
    )
}

export default Productos1