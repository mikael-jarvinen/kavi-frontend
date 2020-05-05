import React from 'react'
import {
  queryBeers,
  queryCiders,
  querySpirits,
  queryEffervescents,
  queryBoxWines,
  queryWines,
  queryVeganWines,
  searchProducts,

} from './queries'

import ProductPage from './components/ProductPage'
import ControlBar from './components/ControlBar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import TvlRedirect from './components/TvlRedirect'

const App = () => {
  return (
    <Router>
      <ControlBar />
      <Switch>
        <Route path='/products/beers'>
          <ProductPage 
            query={queryBeers} 
            products='allBeers'
          />
        </Route>
        <Route path='/products/ciders'>
          <ProductPage 
            query={queryCiders} 
            products='allCiders'
          />
        </Route>
        <Route path='/products/spirits'>
          <ProductPage 
            query={querySpirits} 
            products='allSpirits'
          />
        </Route>
        <Route path='/products/effervescents'>
          <ProductPage 
            query={queryEffervescents} 
            products='allEffervescents'
          />
        </Route>
        <Route path='/products/boxwines'>
          <ProductPage 
            query={queryBoxWines} 
            products='allBoxWines'
          />
        </Route>
        <Route path='/products/wines'>
          <ProductPage 
            query={queryWines} 
            products='allWines'
          />
        </Route>
        <Route path='/products/veganwines'>
          <ProductPage 
            query={queryVeganWines} 
            products='allVeganWines'
          />
        </Route>
        <Route path='/search/:search'>
          <ProductPage 
            query={searchProducts} 
            products='searchProducts'
          />
        </Route>
        <Route path='/TVL/:author'>
          <TvlRedirect />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App