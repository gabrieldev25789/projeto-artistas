import "./CardArtists.css"
import artistsOrigin from "../../data/artists.js"
import { useState } from "react"

function CardArtists() {
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [erro, setErro] = useState("");
  const [artists, setArtists] = useState([]);

  function criaArtista() {
 if (!isNaN(country) || !isNaN(name) || isNaN(genre)) {
  setErro("DIGITOU NÚMERO");
  return;
}

    if (!country || !name || !genre) {
      setErro("Preencha tudo!");
      return;
    }

    const novoArtista = {
      id: Date.now(),
      country,
      name,
      genre
    };

    setArtists([...artists, novoArtista]);

    // limpa os inputs
    setCountry("");
    setName("");
    setGenre("");
    setErro("");
  }

  return (
    <>
    <div>
      <input
        type="text"
        placeholder="País"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Gênero"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <button onClick={criaArtista}>CRIAR ARTISTA</button>

      {erro && <p>{erro}</p>}

      {artists.map((artist) => (
        <ul key={artist.id}>
            <li>Country: {artist.country}</li>
            <li>Name: {artist.name}</li>
            <li>Genre: {artist.genre}</li>
        </ul>
      ))}
    </div>

      <div>
            {artistsOrigin.map((artist, index)=>{
            return (
                <ul key={index}>
                    <li>Grammys: {artist.Grammys}</li>
                    <li>Name: {artist.name}</li>
                    <li>Genre: {artist.genre}</li>
                </ul>
             )
            })}
      </div>
    </>
  );
}

export default CardArtists