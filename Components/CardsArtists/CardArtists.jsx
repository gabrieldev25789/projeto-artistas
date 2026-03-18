import "./CardArtists.css"
import artists from "../../data/artists.js"

function CardArtists() {
  return (
    <>
    <div className="artists">
        {artists.map((artist, index) =>{
        return (
            <ul key={index}>
                <li>Country {artist.country}</li>
                <li>Artist: {artist.name}</li>
                <li>Genre: {artist.genre}</li>
            </ul>
            )
        })}
    </div>
    </>
  )
}

export default CardArtists