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
        </main>

      </div>
    </>
  )
}
