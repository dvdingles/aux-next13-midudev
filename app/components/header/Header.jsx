import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const links = [{
  label: 'Inicio',
  route: '/'
}, {
  label: 'Nosotros',
  route: '/nosotros'
}, {
  label: 'Productos',
  route: '/productos'
}, {
  label: 'Servicios',
  route: 'servicios'
}, {
  label: 'Contacto',
  route: 'contacto'
}]

const Header = () => {
  return (
    <>

      <header className={styles.header}>
        <nav>
          <ul className={styles.ul}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Header
