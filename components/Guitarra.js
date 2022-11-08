import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
  
    const {nombre, precio, imagen, descripcion, url} = guitarra

    return (
        <div className={styles.flex}>
            <Image src={imagen.url} width={220} height={550} layout='responsive' alt={`Guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.boton}>Ver Producto</a>
                </Link>
            </div>
        </div>
    )
}

export default Guitarra