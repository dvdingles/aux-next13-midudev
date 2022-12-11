'use client'
import { useState } from 'react'

export function LikeButtom ({ id }) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>

      {liked ? 'me gusta' : 'nooo'}

    </button>
  )
}
