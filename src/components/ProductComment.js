import React from 'react'
import {
  Typography
} from '@material-ui/core'

const ProductComment = ({ comment }) => {
  return (
    <div>
      <Typography variant='caption'>{comment.author}</Typography>
      <Typography>{comment.message}</Typography>
    </div>
  )
}

export default ProductComment