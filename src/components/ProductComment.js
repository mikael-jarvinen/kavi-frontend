import React from 'react'
import {
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  commentDiv: {
    border: '1px solid grey',
    marginTop: 10,
    paddingTop: 5,
    marginBottom: 10,
    paddingBottom: 5,
    borderRadius: 2
  },
}))

const ProductComment = ({ comment }) => {
  const classes = useStyles()

  return (
    <div className={classes.commentDiv}>
      <Typography>{comment.author}</Typography>
      <Typography variant='caption'>{comment.message}</Typography>
    </div>
  )
}

export default ProductComment