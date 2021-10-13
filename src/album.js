export const Album = (props) => {
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
