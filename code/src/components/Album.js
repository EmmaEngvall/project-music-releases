import React from 'react'

const Album = ({ image, albumname, artistname, albumurl, artisturl }) => {
  return (
    <article className="albumcontainer">
      <a href={albumurl}>
        <img className="album-img" src={image} alt="Album Cover" />
      </a>
      <a href={albumurl}>
        <div className="albumname">{albumname}</div>
      </a>
      <a href={artisturl}>
        <div className="artistname">{artistname}</div>
      </a>
    </article>
  )
}

export default Album