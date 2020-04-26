import React from 'react'
import {
  Dialog,
} from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { queryModalOpen } from '../queries'
import ProductDialogContent from './ProductDialogContent'

const ProductDialog = () => {
  const modalOpen = useQuery(queryModalOpen)

  if(modalOpen.loading) {
    return <></>
  }

  return (
    <Dialog
      open={!!modalOpen.data.modalOpen} 
      onClose={() => modalOpen.client.writeQuery({
        query: queryModalOpen,
        data: { modalOpen: undefined }
      })}>
      <ProductDialogContent />
    </Dialog>
  )
}

export default ProductDialog