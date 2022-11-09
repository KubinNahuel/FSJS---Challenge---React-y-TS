import React from "react";
const listGorras=[
{nombre: "Wilson", Precio: "20$", descripcion:"Gorra marca wilson"},
{nombre: "Head", Precio: "15$", descripcion:"Gorra marca Head"},
{nombre: "Babolat", Precio: "14$", descripcion:"Gorra marca Babolat"}
]

const Productos3=()=>{
    return(
        <>
        <h1>Gorras</h1>
            <div className="card-container">
                {listGorras.map((element,index) => {
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

export default Productos3