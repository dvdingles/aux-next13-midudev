import './globals.css'
import { Header } from './components/header/Header'


export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>

        <Header />

        {children}

      </body>
    </html>
  )
}
