import React from 'react'
import { Route, useHistory }from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  GridListTile,
  GridListTileBar,
  GridList,
  Container,
  Typography,
} from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { querySortingFilter } from '../queries'
import { sortProducts } from '../utils'
import ProductName from './ProductName'
import SortSelect from './SortSelect'
import ProductDialog from './ProductDialog'

const useStyles = makeStyles(() => ({
  Products: {
    height: '80vh',
    width: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  },
  GridListTile: {
    padding: 10
  },
  sortDiv: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: 10,
  },
}))

const ProductBox = ({ product }) => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <GridListTile className={classes.GridListTile}>
      <img 
        onClick={() => history.push(`${history.location.pathname}/${product.id}`)} 
        src={product.img} 
        alt='product'
        style={{ cursor: 'pointer' }}
      />
      <GridListTileBar
        title={<ProductName product={product} />}
        subtitle={
          <div>
            <div>KAVI {product.KAVI}</div>
            <div>{product.price}€</div>
          </div>}
      />
    </GridListTile>
  )
}

const ProductPage = ({ query, products }) => {
  const classes = useStyles()
  const result = useQuery(query)
  const { data } = useQuery(querySortingFilter)

  if (result.loading) {
    return (
      <Container>
        <Typography>
          Loading
        </Typography>
      </Container>
    )
  }

  const sortedProducts = sortProducts(result.data[products], data.sortingFilter)

  return (
    <Container>
      <div className={classes.sortDiv}>
        <SortSelect />
      </div>
      <GridList
        cellHeight={'auto'} 
        className={classes.Products}
      >
        {sortedProducts.map(p => <ProductBox key={p.id} product={p} />)}
      </GridList>
      <Route path='/:category/:id'>
        <ProductDialog />
      </Route>
    </Container>
  )
}

export default ProductPage