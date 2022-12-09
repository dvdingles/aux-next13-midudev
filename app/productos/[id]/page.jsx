import React from 'react'

const IDPage = ({ params }) => {
  const { id } = params
  return (
    <>
      <h1>Esto es un id {id}</h1>
    </>
  )
}

export default IDPage
