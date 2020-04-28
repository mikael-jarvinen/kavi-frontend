import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
  Dialog,
} from '@material-ui/core'
import ProductDialogContent from './ProductDialogContent'

const ProductDialog = () => {
  const { id, category } = useParams()
  const [productId, setProductId] = useState(id)
  const history = useHistory()

  const close = () => {
    setProductId(null)
    history.replace(`/${category}`)
  }

  return (
    <div>
      <Dialog
        open={!!productId} 
        onClose={close}>
        <ProductDialogContent id={id} close={close} />
      </Dialog>
    </div>
    
  )
}

export default ProductDialog