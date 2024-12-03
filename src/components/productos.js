import React, { useState, useLayoutEffect } from "react";
import { supabase } from "../database/supabase";
import Card from "./card";

function Producto() {
    const [productos,setProductos] = useState([]);

    const getProductos = async () => {
        const { data: items, error } = await supabase.from('Producto').select('*');
        if(error){
            console.error(error);
        } else {
            console.log(items)
            setProductos(items);
            console.log(productos)
        }
    }

    useLayoutEffect(() => {
        getProductos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="d-flex flex-wrap m-4 justify-content-center"> 
            {productos.map((producto) => {
                return(
                    <Card key={producto.id} id={producto.id} nombre={producto.nombre_producto} precio={producto.precio_producto} imagen={'data:image/png;base64,'+producto.image}/>
                )
            })}
        </div>
    )
}

export default Producto;