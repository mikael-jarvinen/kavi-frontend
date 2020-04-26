import React from 'react'
import {
  Box,
  DialogTitle,
  Typography
} from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { queryModalOpen, getProduct } from '../queries'
import ProductComment from './ProductComment'

const ProductDialogContent = () => {
  const { data, client } = useQuery(queryModalOpen)
  const result = useQuery(getProduct, {
    variables: {
      idToSearch: data.modalOpen
    }
  })

  if (result.loading) {
    return (
      <div>
        <DialogTitle>Loading</DialogTitle>
      </div>
    )
  }

  const product = result.data.product

  return (
    <div>
      <DialogTitle 
        onClick={() => window.open(product.url)}
        style={{ cursor: 'pointer' }}
      >
        {product.name}
      </DialogTitle>
      <Box display='flex' flexDirection='row'>
        <img 
          src={product.img} 
          alt='product'
          onClick={() => window.open(product.url)}
          style={{ cursor: 'pointer' }}
        />
        <div style={{ padding: 30 }}>
          <Typography>Hinta {product.price}€</Typography>
          <Typography>Postit {product.postage}€</Typography>
          <Typography>Tilavuus {product.volume}L</Typography>
          <Typography>Voltit {product.vol}%</Typography>
          <Typography>KAVI {product.KAVI}</Typography>
          {product.comments.map(comment => 
            <ProductComment key={product.id} comment={comment} />
          )}
        </div>
      </Box>
    </div>
  )
}

export default ProductDialogContent