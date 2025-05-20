export default function ProductList({ productos, onEdit, onDelete }) {
    return (
      <div>
        {productos.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          <ul>
            {productos.map(producto => (
              <li key={producto.id}>
                <strong>{producto.descripcion}</strong> - ${producto.precioUnitario} (-{producto.descuento}%) = ${producto.precioConDescuento.toFixed(2)}
                - Stock: {producto.stock}
                <button onClick={() => onEdit(producto)}>Editar</button>
                <button onClick={() => onDelete(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }