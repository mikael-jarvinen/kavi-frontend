import React from 'react'
import {
  queryBeers,
  queryCiders,
  querySpirits,
  queryEffervescents,
  queryBoxWines,
  queryWines,
  queryVeganWines
} from './queries'

import ProductPage from './components/ProductPage'
import ControlBar from './components/ControlBar'
import Footer from './components/Footer'

import { makeStyles } from '@material-ui/core/styles'
import Background from './images/background.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundImage: 'url(' + Background + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: -21
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Router>
        <ControlBar />
        <Switch>
          <Route path='/beers'>
            <ProductPage query={queryBeers} products='allBeers'/>
          </Route>
          <Route path='/ciders'>
            <ProductPage query={queryCiders} products='allCiders'/>
          </Route>
          <Route path='/spirits'>
            <ProductPage query={querySpirits} products='allSpirits'/>
          </Route>
          <Route path='/effervescents'>
            <ProductPage query={queryEffervescents} products='allEffervescents'/>
          </Route>
          <Route path='/boxwines'>
            <ProductPage query={queryBoxWines} products='allBoxWines'/>
          </Route>
          <Route path='/wines'>
            <ProductPage query={queryWines} products='allWines'/>
          </Route>
          <Route path='/veganwines'>
            <ProductPage query={queryVeganWines} products='allVeganWines'/>
          </Route>
          <Route path='/'>
            <div>WIP</div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App