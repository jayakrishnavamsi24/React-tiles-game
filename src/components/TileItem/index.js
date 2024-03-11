import './index.css'

const TileItem = props => {
  const {eachFruit, isPreview, onTileClick} = props
  const {id, isFlipped, fruitImage} = eachFruit

  const tileClick = () => {
    onTileClick(id)
  }

  if (isPreview) {
    return (
      <li className="tile-item">
        <button className="tile-item-button" type="button">
          <img src={fruitImage} alt="tile" />
        </button>
      </li>
    )
  }

  if (isFlipped) {
    return (
      <li className="tile-item">
        <button className="tile-item-button" type="button">
          <img src={fruitImage} alt="tile" />
        </button>
      </li>
    )
  }

  return (
    <li className="tile-item">
      <button className="tile-item-button" onClick={tileClick} type="button">
        <img
          src="https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710157934/WhatsApp_Image_2024-03-11_at_17.22.00_704e9a77_oi6a6a.jpg"
          alt="tile"
        />
      </button>
    </li>
  )
}

export default TileItem
