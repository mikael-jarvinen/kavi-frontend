import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  GridListTile,
  GridListTileBar,
  GridList,
  Container,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
} from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { querySortingFilter } from '../queries'
import { sortProducts } from '../utils'

const useStyles = makeStyles(() => ({
  Products: {
    height: '80vh',
    width: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    backgroundColor: 'transparent'
  },
  GridListTile: {
    padding: 10
  },
  sortDiv: {
    padding: 10,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54',
  },
}))

const ProductBox = ({ product }) => {
  const classes = useStyles()

  return (
    <GridListTile className={classes.GridListTile}>
      <img src={product.img} alt='product-image'/>
      <GridListTileBar
        title={product.name}
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
  const { data, client } = useQuery(querySortingFilter)
  const result = useQuery(query)

  if (result.loading) {
    return (
      <div>Loading</div>
    )
  }
  
  const handleChange = event => {
    client.writeQuery({
      query: querySortingFilter,
      data: { sortingFilter: event.target.value }
    })
  }

  const sortedProducts = sortProducts(result.data[products], data.sortingFilter)

  return (
    <Container>
      <div className={classes.sortDiv}>
        <FormControl variant='outlined'>
          <Select 
            value={data.sortingFilter} 
            onChange={handleChange} 
          >
            <MenuItem value={'Name'}>Nimi</MenuItem>
            <MenuItem value={'kaviUp'}>KAVI nouseva</MenuItem>
            <MenuItem value={'kaviDown'}>KAVI laskeva</MenuItem>
            <MenuItem value={'priceUp'}>hinta nouseva</MenuItem>
            <MenuItem value={'priceDown'}>hinta laskeva</MenuItem>
          </Select>
          <FormHelperText>Järjestys</FormHelperText>
        </FormControl>
      </div>
      <GridList
        cellHeight={'auto'} 
        className={classes.Products}
      >
        {sortedProducts.map(p => <ProductBox key={p.id} product={p} />)}
      </GridList>
    </Container>
  )
}

export default ProductPage