import "./CardArtists.css"

function CardArtists({nome, idade, Qtdalbuns, qtdGrammys}) {
  return (
    <div className="artists">
            <h2>Olá {nome}</h2>
            <p>Você tem {idade} anos</p>
            <p>Você lançou {Qtdalbuns} albuns</p>
            <p>Você venceu {qtdGrammys} grammys</p>
    </div>
  )
}

export default CardArtists