import React, { useState, useLayoutEffect } from "react";
import { supabase } from "../database/supabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCirclePlus, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import "../utils/css/almacen.css"

function Almacen() {
    const [showModal,setShowModal] = useState(false)
    const [productos,setProductos] = useState([]);
    const[nombre_producto,setnombre_producto] = useState('');
    const[precio_producto,setprecio_producto] = useState('');
    const[envio_producto,setenvio_producto] = useState('');
    const[margen_ganancia,setmargen_ganancia] = useState('');
    const[costo_producto,setCostoProducto] = useState('');


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

    const handleSubmit = async(e) => {
        let productoA = {};
        productoA.nombre_producto = nombre_producto; 
        productoA.precio_producto = precio_producto; 
        productoA.envio_producto = envio_producto; 
        productoA.margen_ganancia = margen_ganancia;
        productoA.costo_producto = costo_producto;
        console.log(productoA)

        const { error } = await supabase.from('Producto').insert([productoA]);

        if(error){
            console.error('Error al insertar:',error);
        }else{
            getProductos();
            setShowModal(false);
        }

        //setShowModal(false);
    }

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleOnBlur = () => {
        let costoTotal = costo_producto + envio_producto; 
        setprecio_producto((costoTotal*margen_ganancia)+(costoTotal));
    }

    return(
        <div className="principal d-flex flex-column m-5">
            <h1>Productos</h1>
            <div className="table-actions">
                <button className="btn-bc d-flex gap-1 align-items-center" onClick={ ()=>handleOpenModal() }>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Agregar
                </button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Envio</th>                        
                        <th scope="col">Ganancia</th>                        
                        <th scope="col">Precio</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => {
                        return (
                            <tr key={producto.id}>                            
                                <td>{producto.nombre_producto}</td>
                                <td>${producto.costo_producto}</td>
                                <td>${producto.envio_producto}</td>                                
                                <td>{producto.margen_ganacia}</td>                                
                                <td>${producto.precio_producto}</td>
                                <td>
                                    <button className="btn-bc d-flex gap-1 align-items-center">
                                        <FontAwesomeIcon icon={faTrash} size="1x" color="white" />
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>            
            <div className="modal" id="modal-producto" style={{display: showModal ? 'block' : 'none'}} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Agregar Producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleCloseModal()}></button>
                        </div>
                        
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <label className="w-25 btn-bc" htmlFor="nombre_producto">Nombre</label>
                                    <input className="form-control" onChange={(e) => {setnombre_producto(e.target.value); console.log(e.target.value)}} type="text" placeholder="Nombre Producto" id="nombre_producto" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="w-25 btn-bc" htmlFor="costo_producto">Costo</label>
                                    <input className="form-control" onChange={(e) => setCostoProducto(e.target.value)} value={costo_producto}  type="number" placeholder="Costo Producto" id="costo_producto" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="w-25 btn-bc" htmlFor="envio_producto">Envio</label>
                                    <input className="form-control" onChange={(e) => setenvio_producto(e.target.value)} value={envio_producto} type="number" placeholder="Envio Producto" id="envio_producto" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="w-25 btn-bc" htmlFor="margen_ganancia">Margen</label>
                                    <input className="form-control" onChange={(e) => setmargen_ganancia(e.target.value)} value={margen_ganancia} onBlur={() => handleOnBlur()} type="number" placeholder="Margen Ganancia" id="margen_ganancia" required/>
                                </div>                                
                                <div className="input-group mb-3">
                                    <label className="w-25 btn-bc" htmlFor="precio_producto">Precio</label>
                                    <input className="form-control" onChange={(e) => setprecio_producto(e.target.value)} value={precio_producto} type="number" placeholder="Precio Producto" id="precio_producto" required/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={handleSubmit} className="d-flex gap-2 align-items-center btn-bc">
                                    <FontAwesomeIcon icon={faFloppyDisk} />
                                    Save changes
                                </button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Almacen;