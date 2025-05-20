import { useState } from 'react'
import ProductForm from './Components/ProductForm'
import ProductList from './Components/ProductList'
import SearchBar from './Components/SearchBar'

const App = () => {
  const [productos, setProductos] = useState([])
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState(null)

  const agregarProducto = (producto) => {
    const nuevoProducto = {
      ...producto,
      id: crypto.randomUUID(),
      precioConDescuento: producto.precioUnitario * (1 - producto.descuento / 100),
    }
    setProductos([...productos, nuevoProducto])
  }

  const actualizarProducto = (productoActualizado) => {
    setProductos(productos.map(p =>
      p.id === productoActualizado.id
        ? { ...productoActualizado, precioConDescuento: productoActualizado.precioUnitario * (1 - productoActualizado.descuento / 100) }
        : p
    ))
    setEditing(null)
  }

 
  const eliminarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id))
  }

  const productosFiltrados = productos.filter(p =>
    p.descripcion.toLowerCase().includes(search.toLowerCase()) ||
    p.id.includes(search)
  )

  return (
    <div className="p-4">
      <h1>Gestión de Productos</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductForm onSubmit={editing ? actualizarProducto : agregarProducto} producto={editing} />
      <ProductList
        productos={productosFiltrados}
        onEdit={setEditing}
        onDelete={eliminarProducto}
      />
    </div>
  )
}

export default App