import React, { useState, useLayoutEffect } from "react";
import { supabase } from "../database/supabase";
import Card from "./card";

function Producto() {
    const [productos,setProductos] = useState([]);
    //const [productosSC,setProductosSC] = useState([]);
    //const [cantidadProductosSC,setCantidadProductosSC] = useState(0)

    const getProductos = async () => {
        const { data: items, error } = await supabase.from('Producto').select('*');
        if(error){
            console.error(error);
        } else {            
            setProductos(items);
        }
    }

    useLayoutEffect(() => {
        getProductos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addProductToShoppingCart = async (producto) => {
        let productos = [];
        productos.push(producto);

        sessionStorage.setItem('productos',JSON.stringify(productos));
        console.log(JSON.parse(sessionStorage.getItem('productos')));

        /*console.log(producto);
        console.log(JSON.stringify(producto))
        sessionStorage.setItem('pr',JSON.stringify(producto));
        console.log(JSON.parse(sessionStorage.getItem('pr')));
        sessionStorage.setItem('cantidad_productos_SC',Number(sessionStorage.getItem('cantidad_productos_SC')) + 1) */
        
    }

    return(
        <div className="d-flex flex-wrap m-4 justify-content-center"> 
            {productos.map((producto) => {
                return(
                    <Card key={producto.id} id={producto.id} nombre={producto.nombre_producto} precio={producto.precio_producto} imagen={'data:image/png;base64,'+producto.image} event={() => addProductToShoppingCart(producto)}/>
                )
            })}
        </div>
    )
}

export default Producto;