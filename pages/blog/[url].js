import Lyout from "../../components/Lyout"
import Image from "next/image"
import {formatearFecha} from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const {titulo, imagen, contenido, published_at} = entrada[0]

  return (
    <Lyout pagina={titulo}>
        <main className="contenedor">
            <h1 className="heading">{titulo}</h1>
            <article className={styles.entrada}>
                <Image src={imagen.url} width={800} height={500} alt={`imagen ${titulo}`} layout='responsive'></Image>
                
                <div className={styles.contenido}>
                    <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </main>
    </Lyout>
  )
}

export async function getStaticPaths() {

    const url = `${process.env.API_URL}/blogs`
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

    const urlPeticion = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlPeticion)
    const entrada= await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

/* export async function getServerSideProps({query: {id}}) {

    const url = `http://localhost:1337/blogs/${id}`
    const url = `${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
} */

export default EntradaBlog 

