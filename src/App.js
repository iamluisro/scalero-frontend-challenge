import logo from './logo.svg'
import {Switch, Route, useParams, Link} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

function NotFound404() {
  return <div>You lost?</div>
}

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/record/:recordName">
          <Home />
        </Route>

        <Route path="*" element={<NotFound404 />} />
      </Switch>
    </Layout>
  )
}

export default App
