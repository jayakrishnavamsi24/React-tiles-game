import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import NameEntry from './components/NameEntry'
import GameBoard from './components/GameBoard'

const App = () => (
  <Switch>
    <Route exact path="/" component={NameEntry} />
    <ProtectedRoute exact path="/game-board" component={GameBoard} />
    {/* <ProtectedRoute exact path="/success-screen" component={SuccessScreen} />
    <Route component={NotFound} /> */}
  </Switch>
)

export default App
