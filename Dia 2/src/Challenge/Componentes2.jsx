import React from "react";
const listRaquetas=[
{nombre: "Wilson", Precio: "20$", descripcion:"Raqueta de tennis marca wilson"},
{nombre: "Head", Precio: "15$", descripcion:"Raqueta de tennis marca Head"},
{nombre: "Prince", Precio: "14$", descripcion:"Pelotas de tennis marca Prince"}
]

const Productos2=()=>{
    return(
        <>
        <h1>Raquetas</h1>
            <div className="card-container">
                {listRaquetas.map((element,index) => {
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

export default Productos2