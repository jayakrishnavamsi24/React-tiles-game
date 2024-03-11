import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const userName = localStorage.getItem('name')

  if (!userName === undefined || userName === '') {
    return <Redirect to="/" />
  }

  return <Route {...props} />
}

export default ProtectedRoute
