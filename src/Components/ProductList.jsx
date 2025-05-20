import ProducItem from "./ProductItem"
export default function ProductList({ productos, onEdit, onDelete }) {
    return (
      <div>
        {productos.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          
            <div>
              {productos.map(producto => (
              <ProducItem key={producto.id} producto={producto} onEdit={onEdit} onDelete={onDelete}/>
              
              ))}
          
            </div>
            )}
      </div>
    )
}