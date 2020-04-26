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

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

const App = () => {
  return (
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
  )
}

export default App