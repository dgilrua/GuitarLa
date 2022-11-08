import Listado from '../components/Listado'
import Lyout from '../components/Lyout'

const Tienda = ({entradas}) => {
  
  return (
    <Lyout
        pagina='Tienda'
    >
        <main className='contenedor'>
          <h1 className='heading'>Nuestro Contenido</h1>
          <Listado guitarras={entradas} />
        </main>
    </Lyout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {
      entradas
    }
  }
}

export default Tienda
