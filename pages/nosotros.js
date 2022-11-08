import Image from 'next/image'
import Lyout from '../components/Lyout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Lyout
        pagina='Nosotros'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        <div className={styles.grid}>
          <Image src='/img/nosotros.jpg' alt='imagen nosotros' layout='responsive' width={100} height={100} className={styles.imagen}/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl mi, porta nec diam in, bibendum congue neque. Proin finibus velit rhoncus enim tincidunt volutpat. Ut rhoncus felis a lorem mattis, pulvinar elementum mauris egestas s. Quisque mattis velit augue, sit amet egestas diam facilisis . Quisque mattis velit augue, sit amet egestas diam facilisis ac.</p>

            <p>Vestibulum et mattis velit. Morbi vel ipsum ut urna vehicula faucibus non in quam. Proin molestie sollicitudin felis. Quisque finibus tortor enim, non rhoncus lacus aliquet sed. Proin ultrices rutrum efficitur. Vivamus molestie</p>
          </div>
        </div>  
      </main>
    </Lyout>
  )
}

export default Nosotros
