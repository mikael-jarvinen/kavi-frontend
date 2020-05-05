import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

const TvlRedirect = () => {
  const { author } = useParams()
  window.localStorage.setItem('TVL', 'true')
  window.localStorage.setItem('TVLauthor', author)

  return <Redirect to='/' />
}

export default TvlRedirect