import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Lyout = ({children, pagina, guitarras}) => {
  return (
    <div>
        <Head>
            <title>Guitar LA - {pagina}</title>
            <meta name="description" content="Sitio de venta de guitarras" />
        </Head>

        <Header 
          guitarras={guitarras}
        />

        {children}

        <Footer />

    </div>
  )
}

Lyout.defaultprops = {
  guitarras: null
}

export default Lyout