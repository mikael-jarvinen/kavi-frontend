import React from 'react'
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { querySortingFilter } from  '../queries'

const SortSelect = () => {
  const { data, client } = useQuery(querySortingFilter)

  const handleChange = event => {
    client.writeQuery({
      query: querySortingFilter,
      data: { sortingFilter: event.target.value }
    })
  }

  return (
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
  )
}

export default SortSelect