import '../styles/normalize.css'
import '../styles/globals.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []
    setCarrito(carritoLS)
  },[])

  useEffect(()=> {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = (producto) => {

    if(carrito.some(articulo => articulo.id === producto.id)) {
      const nuevoCarrito = carrito.map(articulo => {
        if(articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      setCarrito(nuevoCarrito)
    } else {
      setCarrito([...carrito, producto])
    }
  }

  const actualizarCarrito = producto => {
    const nuevoCarrito = carrito.map(articulo => {
      if(articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    setCarrito(nuevoCarrito)
  }

  const eliminarProducto = id => {
    const nuevoCarrito = carrito.filter(articulo => articulo.id !== id)
    setCarrito(nuevoCarrito)
  }

  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCarrito={actualizarCarrito}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp
