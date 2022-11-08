import ListadoBlog from '../components/ListadoBlog'
import Lyout from '../components/Lyout'


const Blog = ({entradas}) => {

  return (
    <Lyout
        pagina='Blog'
    >
        <main className='contenedor'>
          <ListadoBlog entradas={entradas} />
        </main>
    </Lyout>
  )
}

export async function getServerSideProps() {

  const url = `${process.env.API_URL}/blogs?_sort=creater_at:desc`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {
      entradas
    }
  }

}

export default Blog
 