import React from 'react'
import {
  Box,
  DialogTitle,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Cancel as CancelIcon } from '@material-ui/icons'
import { useQuery } from '@apollo/client'
import { getProduct } from '../queries'
import ProductComment from './ProductComment'
import CommentForm from './CommentForm'
import TvlButton from './TvlButton'

const useStyles = makeStyles(() => ({
  commentDiv: {
    border: '1px solid black',
    borderRadius: 3,
    height: '20vh',
    minWidth: '15vw',
    overflowY: 'auto',
    marginTop: 10
  },
}))

const ProductDialogContent = ({ id, close }) => {
  const classes = useStyles()
  const result = useQuery(getProduct, {
    variables: {
      idToSearch: id
    }
  })

  if (result.loading) {
    return <></>
  }

  const product = result.data.product

  return (
    <div>
      <Box display='flex' flexDirection='row'>
        <DialogTitle 
          onClick={() => window.open(product.url)}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </DialogTitle>
        <Box 
          flexGrow={1}
          display='flex'
          justifyContent='flex-end' 
          padding={2}
        >
          <CancelIcon onClick={close} style={{ cursor: 'pointer' }}/>
        </Box>
      </Box>
      <Box display='flex' flexDirection='row'>
        <Box>
          <img 
            src={product.img} 
            alt='product'
            onClick={() => window.open(product.url)}
            style={{ cursor: 'pointer' }}
          />
        </Box>
        <div style={{ padding: 30 }}>
          <TvlButton product={product} />
          <Typography>Hinta {product.price}€</Typography>
          <Typography>Postit {product.postage}€</Typography>
          <Typography>Tilavuus {product.volume}L</Typography>
          <Typography>Voltit {product.vol}%</Typography>
          <Typography>KAVI {product.KAVI}</Typography>
          <div className={classes.commentDiv}>
            {product.comments.map(comment => 
              <ProductComment key={comment.date} comment={comment} />
            )}
          </div>
        </div>
      </Box>
      <CommentForm product={product}/>
    </div>
  )
}

export default ProductDialogContent