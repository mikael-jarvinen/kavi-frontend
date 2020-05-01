import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core'
import logo from '../images/Kavi.png'
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import SearchBar from './SearchBar'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    padding: 10,
    paddingTop: 30,
    textAlign: 'center'
  },
  Box: {
    paddingTop: 20,
  },
  search: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 3
  }
}))

const ControlBar = () => {
  const classes = useStyles()

  const onSearch = value => {
    console.log(value)
  }

  return (
    <Container>
      <Box 
        display='flex' 
        flexWrap='wrap' 
        flexDirection='row' 
        className={classes.root}
      >
        <Link to='/' variant='' >
          <img src={logo} alt='Kavi-logo'/>
        </Link>
        <Box flexGrow={1} className={classes.Box}>
          <LinkButton to='/beers'>Kaljat</LinkButton>
        </Box>
        <Box flexGrow={1} className={classes.Box}>
          <LinkButton to='/ciders'>Siiderit</LinkButton>
        </Box>
        <Box flexGrow={1} className={classes.Box}>
          <LinkButton to='/spirits'>Väkevät</LinkButton>
        </Box>
        <Box flexGrow={1} className={classes.Box}>
          <LinkButton to='/effervescents'>Kuohuviinit</LinkButton>
        </Box>
        <Box flexGrow={1} className={classes.Box}>
          <LinkButton to='/boxwines'>Humppakuutiot</LinkButton>
        </Box>
        <Box flexGrow={1} className={classes.Box}>
          <LinkButton to='/wines'>viinit</LinkButton>
        </Box>
        <Box flexGrow={1} className={classes.Box}>
          <LinkButton to='/veganwines'>Luomuviinit</LinkButton>
        </Box>
        <Box className={classes.search}>
          <SearchBar onSearch={onSearch} placeholder='hae...' />
        </Box>
      </Box>
    </Container>
  )
}

export default ControlBar