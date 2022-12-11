import { Counter } from './Counter'

export default function ProductosLayout ({ children }) {
  return (
    <>
      <h1>Este es el Layout de PRODUCTOS</h1>
      <Counter />
      {children}
    </>
  )
}
