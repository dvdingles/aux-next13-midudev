import Etiquetas from './components/etiquetas/Etiquetas'
import styles from './page.module.css'
import Titulo from './components/titulos/Titulo'

export default function InicioPage () {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Titulo />
          <Etiquetas />
          <div>
            <marquee style={{ backgroundColor: 'red', color: 'white', fontWeight: '900', fontHeight: '33px' }}>Auxiliar Manipuladora del Cartón xxx permanecerá cerrado el puente de navidad</marquee>
          </div>
        </main>

      </div>

      <video className={styles.video} muted autoPlay loop>
        <source src='../public/1059077006-preview.mp4' type='video/mp4' />

      </video>
      <div className={styles.divVideo} />
    </>
  )
}
