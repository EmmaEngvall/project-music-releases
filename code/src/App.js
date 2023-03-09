import React from 'react';
import { Header } from 'components/Header'; 
import { Album } from 'components/Album';
import { Artist } from 'components/Artist'; 
import { Footer } from 'components/Footer';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header> 
      <section className="albumcontainer">
        {data.albums.items.map((album) => {
          return (
            <Album
              image={album.images[1].url}
              albumname={album.name}
              artistname={album.artists[0].name}
              albumurl={album.external_urls.spotify}
              artisturl={album.artists[0].external_urls.spotify} />              
          )
      })}    
      </section>

      <Footer />  
    </div>
  );
}
