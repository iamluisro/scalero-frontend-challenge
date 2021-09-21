import {Switch, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import RecordScreen from './screens/record'

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
          <RecordScreen />
        </Route>
        <Route path="*">
          <NotFound404 />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
