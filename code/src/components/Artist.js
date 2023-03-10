
import React from 'react';
import './Artist.css';

export const Artist = (props) => {
  return (
    <div>
      <a
        href={props.artist.external_urls.spotify}
        key={props.artist.id}
        target="_blank"
        rel="noopener noreferrer">
        <span className="artistname"> {props.artist.name}</span>
      </a>
    </div>
  );
};
