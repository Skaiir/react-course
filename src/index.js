import './index.css'
import React from 'react'
import ReactDom from 'react-dom'
import { Album } from './album'
import { albums } from './albums'

const AlbumList = () => (
  <section className='albumlist'>
    {albums.map((a) => (
      <Album key={a.id} album={a} />
    ))}
  </section>
)

ReactDom.render(<AlbumList />, document.getElementById('root'))
