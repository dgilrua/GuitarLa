import Curso from "../components/Curso";
import Listado from "../components/Listado";
import ListadoBlog from "../components/ListadoBlog";
import Lyout from "../components/Lyout";

const Home = ({guitarras, inicio, blog})  => {

  return (
    <Lyout
      pagina='Inicio'
      guitarras={guitarras[3]}
    >

      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <Listado guitarras={guitarras} />
      </main>

      <Curso curso={inicio} />

      <section className="contenedor">
        <ListadoBlog entradas={blog} /> 
      </section>

    </Lyout>
  )
}

export async function getServerSideProps() {
  const urlGuitarra = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const urlInicio = `${process.env.API_URL}/inicio`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`
  const [resGuitarra, resInicio, resBlog] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlInicio),
    fetch(urlBlog)
  ])

  const [guitarras, inicio, blog] = await Promise.all([
    resGuitarra.json(),
    resInicio.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      inicio, 
      blog
    }
  }
}


export default Home
