import React from "react";

export default function ProducItem ({producto,onEdit,onDelete}){
    return (
        <div>
            <div>
            <strong>{producto.descripcion}</strong> - ${producto.precioUnitario} (-{producto.descuento}%) = ${producto.precioConDescuento.toFixed(2)}
            - Stock: {producto.stock}
            </div>
            <div>
            <button onClick={() => onEdit(producto)}>Editar</button>
            <button onClick={() => onDelete(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}