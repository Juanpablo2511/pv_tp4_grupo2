import { useEffect, useState, useCallback} from 'react'
import { useMemo } from 'react'
import ProductForm from './Components/ProductForm'
import ProductList from './Components/ProductList'
import SearchBar from './Components/SearchBar'

const App = () => {
  const [productos, setProductos] = useState([])
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState(null)
  //uso de useEffect para mostrar por consola los cambios de la array del productos
  useEffect (()=> {
    console.log("Productos Actualizados : " , productos);
  }, [productos]);

  const agregarProducto = useCallback((producto) => {
    const nuevoProducto = {
      ...producto,
      id: crypto.randomUUID(),
      precioConDescuento: producto.precioUnitario * (1 - producto.descuento / 100),
    }
    setProductos(prev => [...prev, nuevoProducto])
  }, [])

  const actualizarProducto = useCallback((productoActualizado) => {
    setProductos(prev => prev.map(p =>
      p.id === productoActualizado.id
        ? { ...productoActualizado, precioConDescuento: productoActualizado.precioUnitario * (1 - productoActualizado.descuento / 100) }
        : p
    ))
    setEditing(null)
  }, [])

  const eliminarProducto = useCallback((id) => {
    setProductos(prev => prev.filter(p => p.id !== id))
  }, [])
//Uso de hooks useMemo
  const productosFiltrados = useMemo(() =>{
    const termino = search.toLowerCase();
    return productos.filter(p =>
      p.descripcion.toLowerCase().includes(termino) ||
      p.id.toLowerCase().includes(termino)
    )
  
  }, [productos ,search]);

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