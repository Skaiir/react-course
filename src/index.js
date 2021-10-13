import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// setup vars
const albums = [
  {
    id: 1,
    author: 'The Naturals',
    name: 'On The Way (To the Laughing Light Of Plenty)',
    cover: 'https://f4.bcbits.com/img/a1321283216_16.jpg',
  },
  {
    id: 2,
    author: 'DFX',
    name: 'Relax Your Body (Remastered) - EP',
    cover:
      'https://z9j9e3w7.stackpathcdn.com/wp-content/uploads/2016/11/DFX-Art.jpg',
  },
  {
    id: 3,
    author: 'Puscifer',
    name: 'The Underwhelming',
    cover:
      'https://img.discogs.com/VLRt7UDRk4Fy9TKvhudyvOnjg8Q=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15931879-1600677638-5830.jpeg.jpg',
  },
  {
    id: 4,
    author: 'Soen',
    name: 'Cognitive',
    cover: 'https://m.media-amazon.com/images/I/81PcN3eQUTL._SS500_.jpg',
  },
]

const AlbumList = () => (
  <section className='albumlist'>
    {albums.map((a) => (
      <Album key={a.id} album={a} />
    ))}
  </section>
)

const Album = (props) => {
  if (props.hasOwnProperty('album')) {
    const { author, cover, name } = props.album
    return (
      <article className='album'>
        <h1>{author.toUpperCase()}</h1>
        <img
          class='albumcover'
          src={cover}
          alt='album-cover'
          onClick={() => alert('albumCoverClicked')}
        />
        <h5>{name}</h5>
      </article>
    )
  } else {
    return null
  }
}

ReactDom.render(<AlbumList />, document.getElementById('root'))
