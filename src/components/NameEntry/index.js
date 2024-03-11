import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'

class NameEntry extends Component {
  state = {
    username: '',
    redirectToGameBoard: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {username} = this.state
    if (username.trim() !== '') {
      localStorage.setItem('name', username)
      this.setState({redirectToGameBoard: true})
    }
  }

  render() {
    const {username, redirectToGameBoard} = this.state

    if (redirectToGameBoard) {
      return <Redirect to="/game-board" />
    }

    return (
      <div className="name-entry-bg-container">
        <h1 className="name-entry-title"> React Tiles </h1>
        <div className="name-entry-input-container">
          <label htmlFor="userName">Enter Your Name</label>
          <input
            value={username}
            onChange={this.onChangeUsername}
            type="text"
            id="userName"
          />
          <button type="button" onClick={this.onSubmit}>
            Play
          </button>
        </div>
      </div>
    )
  }
}

export default NameEntry
