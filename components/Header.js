import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import {useRouter} from 'next/router'

const Header = ({guitarras}) => {

  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={`contenedor`}>
        <div className={styles.flex}>
          <div>
            <Link href='/'>
              <a><Image src='/img/logo.svg' width={400} height={100} alt='logo svg'/></a>
            </Link>
          </div>
            <nav className={styles.navegacion}>
              <Link href='/'>Inicio</Link>
              <Link href='/nosotros'>Nosotros</Link>
              <Link href='/blog'>Blog</Link>
              <Link href='/tienda'>Tienda</Link>
              <Link href='/carrito'>
                <a>
                  <Image src='/img/carrito.png' width={30} height={25} alt='imagen carrito' layout='fixed' />
                </a>
              </Link>
            </nav>
          </div>
          {guitarras && (
            <div className={styles.modelo}>
              <h2>Modelo {guitarras.nombre}</h2>
              <p>{guitarras.descripcion}</p>
              <p className={styles.precio}>${guitarras.precio}</p>
              <Link href={`/guitarras/${guitarras.url}`}>
                <a className={styles.boton}>Ver producto</a>
              </Link>
            </div>
          )}
        </div>

        {router.pathname === '/' && (
          <img src='/img/header_guitarra.png' alt='imagen guitarra' className={styles.guitarraHeader} />
        )}

    </header>
  )
}

export default Header