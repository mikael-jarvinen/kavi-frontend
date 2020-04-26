import React from 'react'
import { Typography } from '@material-ui/core'

const ProductName = ({ product }) => {
  return (
    <Typography onClick={() => window.open(product.url)} style={{ cursor: 'pointer' }}>
      {product.name}
    </Typography>
  )
}

export default ProductName