import "./CardArtists.css"
import artistsOrigin from "../../data/artists.js"
import { useState } from "react"

function CardArtists() {
  const [grammy, setGrammy] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [erro, setErro] = useState("");
  const [artists, setArtists] = useState([]);

  function criaArtista() {
if (
  /\d/.test(name) ||
  /\d/.test(genre)
) {
  setErro("Não use números!");
  return;
}
    if (!grammy || !name || !genre) {
      setErro("Preencha tudo!");
      return;
    }

    const novoArtista = {
      id: Date.now(),
      grammy,
      name,
      genre
    };

    setArtists([...artists, novoArtista]);

    // limpa os inputs
    setGrammy("");
    setName("");
    setGenre("");
    setErro("");
  }

  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Grammys"
        value={grammy}
        onChange={(e) => setGrammy(e.target.value)}
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
            <li>grammy: {artist.grammy}</li>
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