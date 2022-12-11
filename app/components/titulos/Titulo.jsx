import styles from './titulo.module.css'

export default function Titulo () {
  return (
    <>
      <h1 className={styles.title}>
        Auxiliar Manipuladora <br /> del Cartón
      </h1>

      <p className={styles.description}>
        Haz aquí tu pedido{' '}
        <code className={styles.code}>968 555 555</code>
      </p>

    </>
  )
}
