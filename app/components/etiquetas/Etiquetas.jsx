import React from 'react'
import styles from './etiquetas.module.css'

export default function Etiquetas () {
  return (
    <>
      <div className={styles.grid}>
        <a href='https://beta.nextjs.org/docs' className={styles.card}>
          <h2>Nosotros &rarr;</h2>
          <p>Find in-depth information about Next.js 13</p>
        </a>

        <a
          href='https://github.com/vercel/next.js/tree/canary/examples'
          className={styles.card}
        >
          <h2>Productos &rarr;</h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href='https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.card}
        >
          <h2>Servicios &rarr;</h2>
          <p>Deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </>
  )
}
