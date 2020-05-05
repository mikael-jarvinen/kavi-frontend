import React from 'react'
import { Button } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { addOrder } from '../queries'

const TvlButton = ({ product }) => {
  const TVL = window.localStorage.getItem('TVL') === 'true'
  const [mutationAddOrder] = useMutation(addOrder)

  if (!TVL) {
    return null
  }

  const handleClick = () => {
    mutationAddOrder({
      variables: {
        author: window.localStorage.getItem('TVLauthor'),
        product: product.name,
        price: product.price,
        postage: product.postage
      }
    })
  }

  return (
    <Button variant='contained' onClick={handleClick}>
      lisää driveen
    </Button>
  )
}

export default TvlButton