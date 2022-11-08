import Link from 'next/link'
import React from 'react'
import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {

    const {imagen, titulo, contenido} = curso

  return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h1 className='heading'>{titulo}</h1>
                <p className={styles.texto}>{contenido}</p>
                <Link href='/cursos'>
                    <a className={styles.boton}>Mas informacion</a>
                </Link>
            </div>
        </div>

        <style jsx>
            {`
                section {
                    margin-top: 8rem;
                    padding: 4rem 0;
                    background-image: linear-gradient(to right, rgb(0 0 0 / 0.65), rgb(0 0 0 / 0.7)), url(${imagen.url});
                    background-size: cover;
                    background-position: 50%;
                }
            `}
        </style>


    </section>
  )
}

export default Curso    