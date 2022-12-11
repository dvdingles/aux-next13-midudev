import Link from 'next/link'
import React from 'react'
import { LikeButtom } from './LikeButtom'

const fetchPosts = () => {
  // getStaticProps
  // --> return fetche('https://jsonplaceholder.typicode.com/posts').then(res=>res.json)

  // getServerSideProps
  // --> return fetche('https://jsonplaceholder.typicode.com/posts', { cache: 'no-cache'}).then(res=>res.json)

  // incremental static regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='/productos/[id]' as={`/productos/${post.id}`}>
        <h2 style={{ color: 'red' }}>{post.title}</h2>
        <h3>{post.id}</h3>
        <p>{post.body}</p>
        <LikeButtom id={post.id} />
      </Link>
    </article>
  ))
}
