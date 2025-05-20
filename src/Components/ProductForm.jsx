import { useState, useEffect } from 'react'

const initialState = {
  descripcion: '',
  precioUnitario: 0,
  descuento: 0,
  stock: 0
}

export default function ProductForm({ onSubmit, producto }) {
  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    if (producto) setFormData(producto)
    else setFormData(initialState)
  }, [producto])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: name === "descripcion" ? value : Number(value) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.descripcion) return
    onSubmit(formData)
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" />
      <input name="precioUnitario" type="number" value={formData.precioUnitario} onChange={handleChange} placeholder="Precio Unitario" />
      <input name="descuento" type="number" value={formData.descuento} onChange={handleChange} placeholder="Descuento (%)" />
      <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock" />
      <button type="submit">{producto ? 'Actualizar' : 'Agregar'} Producto</button>
    </form>
  )
}