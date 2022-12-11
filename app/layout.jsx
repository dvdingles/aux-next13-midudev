import './globals.css'
import styles from './layout.module.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>

        <header className={styles.header}>
          <Header />
        </header>

        {children}

        <footer className={styles.footer}>
          <Footer />
        </footer>

      </body>
    </html>
  )
}
