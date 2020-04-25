import React from 'react'
import { useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'

const LinkButton = ({ children, to }) => {
  const history = useHistory()
  return (
    <div onClick={() => history.push(to)} style={{ cursor: 'pointer' }}>
      <Typography variant='button'>
        {children}
      </Typography>
    </div>
  )
}

export default LinkButton