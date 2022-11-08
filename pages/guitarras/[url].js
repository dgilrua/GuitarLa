import React, { useState } from 'react'
import Lyout from '../../components/Lyout'
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'
import Error from '../../components/Error'

const EntradaGuitarras = ({datos, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1)
    const [error, setError] = useState(false)
    const {nombre, precio, imagen, descripcion, url, id}  = datos[0]

    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1){
            setError(true)
            return
        } 
        setError(false)

        const guitarraSeleccionada = {
            id,
            imagen: imagen.url,
            nombre, 
            precio,
            cantidad
        }

        

        agregarCarrito(guitarraSeleccionada)

    }

    return (
        <Lyout pagina={`Guitarra ${nombre}`}>
            <div className={styles.flex}>
                <Image src={imagen.url} width={180} height={400} layout='responsive' alt={`Guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form 
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.manejo}>
                            <label className={styles.label}>Cantidad: </label>
                            {error && (
                                <Error />
                            )}
                        </div>

                        <select
                            value={cantidad}
                            onChange={e => setCantidad(parseInt(e.target.value))}
                        >
                            <option value='0'>-- Seleccione --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                        </select>
                        <input 
                            type='submit'
                            value='Agregar al carrito'
                            className={styles.boton}
                        />
                    </form>
                </div>
            </div>
        </Lyout>
    )
}

export async function getStaticPaths() {

    const url = `${process.env.API_URL}/guitarras`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({
        params: {url: entrada.url}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {
    const urlPeticion = `${process.env.API_URL}/guitarras?url=${url}`
    const resultado = await fetch(urlPeticion)
    const datos = await resultado.json()

    return {
        props: {
            datos
        }
    }
}

export default EntradaGuitarras 