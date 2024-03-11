import {Component} from 'react'
import './index.css'
import TileItem from '../TileItem'

const initialFruitsList = [
  {
    id: 0,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149547/WhatsApp_Image_2024-03-11_at_15.00.29_46fa1d9e_uckp7c.jpg',
  },
  {
    id: 1,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149543/WhatsApp_Image_2024-03-11_at_14.59.51_c527b586_wehikx.jpg',
  },
  {
    id: 2,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149538/WhatsApp_Image_2024-03-11_at_14.59.08_262b0193_rhypps.jpg',
  },
  {
    id: 3,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149534/WhatsApp_Image_2024-03-11_at_14.58.45_00d90367_wcxnub.jpg',
  },
  {
    id: 4,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149530/WhatsApp_Image_2024-03-11_at_14.57.54_7573bd43_dytdll.jpg',
  },
  {
    id: 5,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149525/WhatsApp_Image_2024-03-11_at_14.57.32_fe813629_rmgw5u.jpg',
  },
  {
    id: 6,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149516/WhatsApp_Image_2024-03-11_at_14.57.05_c07b534f_bg3rzw.jpg',
  },
  {
    id: 7,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149507/WhatsApp_Image_2024-03-11_at_14.56.27_e3d22499_ko87yb.jpg',
  },
  {
    id: 8,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149501/WhatsApp_Image_2024-03-11_at_14.56.02_173413aa_rrmgfe.jpg',
  },
  {
    id: 9,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149497/WhatsApp_Image_2024-03-11_at_14.55.22_51ef940d_log8qj.jpg',
  },
  {
    id: 10,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149493/WhatsApp_Image_2024-03-11_at_14.54.58_b19a2b33_igghxr.jpg',
  },
  {
    id: 11,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149489/WhatsApp_Image_2024-03-11_at_14.54.34_3bdaafad_dmdua1.jpg',
  },
  {
    id: 12,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149483/WhatsApp_Image_2024-03-11_at_14.53.51_28849269_kookpk.jpg',
  },
  {
    id: 13,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149479/WhatsApp_Image_2024-03-11_at_14.53.21_9e94853b_xqyuvj.jpg',
  },
  {
    id: 14,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149474/WhatsApp_Image_2024-03-11_at_14.52.37_9d155bae_dfkme8.jpg',
  },
  {
    id: 15,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149469/WhatsApp_Image_2024-03-11_at_14.52.13_d0e5535b_ubbakf.jpg',
  },
  {
    id: 16,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149547/WhatsApp_Image_2024-03-11_at_15.00.29_46fa1d9e_uckp7c.jpg',
  },
  {
    id: 17,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149543/WhatsApp_Image_2024-03-11_at_14.59.51_c527b586_wehikx.jpg',
  },
  {
    id: 18,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149538/WhatsApp_Image_2024-03-11_at_14.59.08_262b0193_rhypps.jpg',
  },
  {
    id: 19,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149534/WhatsApp_Image_2024-03-11_at_14.58.45_00d90367_wcxnub.jpg',
  },
  {
    id: 20,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149530/WhatsApp_Image_2024-03-11_at_14.57.54_7573bd43_dytdll.jpg',
  },
  {
    id: 21,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149525/WhatsApp_Image_2024-03-11_at_14.57.32_fe813629_rmgw5u.jpg',
  },
  {
    id: 22,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149516/WhatsApp_Image_2024-03-11_at_14.57.05_c07b534f_bg3rzw.jpg',
  },
  {
    id: 23,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149507/WhatsApp_Image_2024-03-11_at_14.56.27_e3d22499_ko87yb.jpg',
  },
  {
    id: 24,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149501/WhatsApp_Image_2024-03-11_at_14.56.02_173413aa_rrmgfe.jpg',
  },
  {
    id: 25,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149497/WhatsApp_Image_2024-03-11_at_14.55.22_51ef940d_log8qj.jpg',
  },
  {
    id: 26,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149493/WhatsApp_Image_2024-03-11_at_14.54.58_b19a2b33_igghxr.jpg',
  },
  {
    id: 27,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149489/WhatsApp_Image_2024-03-11_at_14.54.34_3bdaafad_dmdua1.jpg',
  },
  {
    id: 28,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149483/WhatsApp_Image_2024-03-11_at_14.53.51_28849269_kookpk.jpg',
  },
  {
    id: 29,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149479/WhatsApp_Image_2024-03-11_at_14.53.21_9e94853b_xqyuvj.jpg',
  },
  {
    id: 30,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149474/WhatsApp_Image_2024-03-11_at_14.52.37_9d155bae_dfkme8.jpg',
  },
  {
    id: 31,
    isFlipped: false,
    fruitImage:
      'https://res.cloudinary.com/jayakrishnavamsi/image/upload/v1710149469/WhatsApp_Image_2024-03-11_at_14.52.13_d0e5535b_ubbakf.jpg',
  },
]

class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruitsList: initialFruitsList.sort(() => Math.random() - 0.5),
      isPreview: true,
      name: localStorage.getItem('name'),
      timer: 0,
      score: 0,
      openedTiles: [],
      showSuccessView: false,
      completedTiles: [],
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
    setTimeout(() => {
      this.setState({isPreview: false})
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  formatTime = seconds => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0')
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0')
    return `${minutes}:${remainingSeconds}`
  }

  checkTilesEquality = id => {
    const {fruitsList, openedTiles, score, completedTiles} = this.state
    const presentOpenedTile = fruitsList.filter(
      eachFruit => eachFruit.id === id,
    )

    if (
      fruitsList.length - completedTiles.length < 4 &&
      presentOpenedTile[0].fruitImage === openedTiles[0].fruitImage
    ) {
      clearInterval(this.timerID)
      this.setState({
        score: score + 1,
        showSuccessView: true,
        completedTiles: [
          ...completedTiles,
          presentOpenedTile[0],
          openedTiles[0],
        ],
      })
    } else if (presentOpenedTile[0].fruitImage === openedTiles[0].fruitImage) {
      const modifiedFruitsList = fruitsList.map(eachFruit =>
        eachFruit.id === id ? {...eachFruit, isFlipped: true} : eachFruit,
      )
      clearInterval(this.timerID)
      this.setState({
        score: score + 1,
        openedTiles: [],
        fruitsList: modifiedFruitsList,
        completedTiles: [
          ...completedTiles,
          presentOpenedTile[0],
          openedTiles[0],
        ],
        showSuccessView: true,
      })
    } else if (fruitsList.length - completedTiles.length < 4) {
      clearInterval(this.timerID)
      this.setState({
        showSuccessView: true,
        completedTiles,
      })
    } else {
      const revModifiedFruitsList = fruitsList.map(eachFruit =>
        eachFruit.id === id || eachFruit.id === openedTiles[0].id
          ? {...eachFruit, isFlipped: false}
          : eachFruit,
      )
      clearInterval(this.timerID)
      this.setState({
        score: score - 1,
        openedTiles: [],
        fruitsList: revModifiedFruitsList,
        showSuccessView: true,
      })
    }
  }

  onTileClick = id => {
    const {openedTiles, fruitsList} = this.state
    if (openedTiles.length === 0) {
      const presentOpenedTile = fruitsList.filter(
        eachFruit => eachFruit.id === id,
      )
      const modifiedFruitsList = fruitsList.map(eachFruit =>
        eachFruit.id === id ? {...eachFruit, isFlipped: true} : eachFruit,
      )
      this.setState({
        openedTiles: presentOpenedTile,
        fruitsList: modifiedFruitsList,
      })
    } else if (openedTiles.length === 1) {
      const tempModifiedFruitsList = fruitsList.map(eachFruit =>
        eachFruit.id === id ? {...eachFruit, isFlipped: true} : eachFruit,
      )
      this.setState(
        {fruitsList: tempModifiedFruitsList},
        this.checkTilesEquality(id),
      )
    }
  }

  render() {
    const {
      fruitsList,
      completedTiles,
      openedTiles,
      showSuccessView,
      isPreview,
      name,
      score,
      timer,
    } = this.state

    return (
      <div className="game-board-bg-container">
        <h1 className="game-board-title">
          {' '}
          {showSuccessView ? 'React Tiles' : 'Mahajong Game'}{' '}
        </h1>
        <div className="score-time-container">
          <p>Score: {score}</p>
          <p>Time: {this.formatTime(timer)}</p>
        </div>
        <div className="game-board-tiles-container">
          <div className="game-board-user-greeting-container">
            <p>Welcome {name} 👋👋</p>
          </div>
          {showSuccessView ? (
            <div className="success-container">
              <h1>Game Finished!</h1>
              <h1> Score: {score}</h1>
              <h1>Time Taken: {this.formatTime(timer)}</h1>
            </div>
          ) : (
            <ul className="game-board-tiles-list-container">
              {fruitsList.map(eachFruit => (
                <TileItem
                  key={eachFruit.id}
                  eachFruit={eachFruit}
                  onTileClick={this.onTileClick}
                  isPreview={isPreview}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default GameBoard
