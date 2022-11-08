import Image from "next/image"
import { useEffect, useState } from "react"
import Listado from "../components/Listado"
import Lyout from "../components/Lyout"
import styles from '../styles/Carrito.module.css'

const Carrito = ({carrito, actualizarCarrito, eliminarProducto}) => {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const precioTotal = carrito.reduce((total, producto) => total + (producto.precio*producto.cantidad), 0)

    setTotal(precioTotal)

  }, [carrito])

  return (
    <Lyout pagina='Carrito'>
        <h1 className="heading">Carrito</h1>
        <main className={`contenedor ${styles.contenido}`}>

            <div className={styles.carrito}>
              <h2>Articulos</h2>
              {carrito.length === 0 ? '' : (
                carrito.map(producto => (
                  <div key={producto.id} className={styles.producto}> 
                    <div>
                      <Image width={250} height={480} Lyout='responsive' src={producto.imagen} alt='imagen guitarra carrito'/>                      
                    </div>
                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <div className={styles.cantidad}>
                        <p>Cantidad:</p>
                        <select
                            className={styles.select}
                            value={producto.cantidad}
                            onChange={e => actualizarCarrito({
                              cantidad: e.target.value,
                              id: producto.id
                            })}
                        >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                        </select>
                      </div>
                      <p className={styles.precio}><span>Precio: </span>${producto.precio}</p>
                      <p className={styles.subtotal}><span>Subtotal: </span>${producto.precio * producto.cantidad}</p>
                    </div>
                    <button
                      className={styles.eliminar} 
                      type="button"
                      onClick={() => eliminarProducto(producto.id)}
                    >X</button>
                  </div>
                ))
              )}

            </div>

            <div className={styles.pago}>
              {total > 0 ? (
                <>
                  <h2>Resumen del pedido</h2>
                  <p>Total a pagar: <span>{total}</span></p>
                </>
              ) : <h2>No hay articulos en el carrito</h2>}
            </div>

        </main>
    </Lyout>
  )
}

export default Carrito