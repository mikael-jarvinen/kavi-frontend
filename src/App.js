import React from 'react'
import { useQuery } from '@apollo/client'
import { querySpirits } from './queries'

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

  const result = useQuery(querySpirits)
  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div className={classes.root}>
      <Router>
        <ControlBar />
        <ProductPage products={result.data.allSpirits} />
        <Footer />
      </Router>
    </div>
  )
}

export default App