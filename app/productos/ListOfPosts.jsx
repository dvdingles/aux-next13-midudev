import React from 'react'

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPost()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <h2 style={{color:'red'}}>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ))
}
