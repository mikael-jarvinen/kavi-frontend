import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Box,
  Container,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListSubheader,
  Divider
} from '@material-ui/core'
import logo from '../images/Kavi.png'
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import ListItemLink from './ListItemLink'
import SearchBar from './SearchBar'
import { useHistory } from 'react-router-dom'

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
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1
  }
}))

const ControlBar = () => {
  const [drawer, setDrawer] = useState(false)
  const classes = useStyles()
  const history = useHistory()
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container>
      <Box 
        display='flex' 
        flexDirection='row' 
        className={classes.root}
      >
        <Link to='/' variant='' >
          <img src={logo} alt='Kavi-logo'/>
        </Link>
        {!matches ? <Box display='flex' flexGrow={1}>
          <Box flexGrow={1} className={classes.Box}>
            <LinkButton to='/products/beers'>Kaljat</LinkButton>
          </Box>
          <Box flexGrow={1} className={classes.Box}>
            <LinkButton to='/products/ciders'>Siiderit</LinkButton>
          </Box>
          <Box flexGrow={1} className={classes.Box}>
            <LinkButton to='/products/spirits'>Väkevät</LinkButton>
          </Box>
          <Box flexGrow={1} className={classes.Box}>
            <LinkButton to='/products/effervescents'>Kuohuviinit</LinkButton>
          </Box>
          <Box flexGrow={1} className={classes.Box}>
            <LinkButton to='/products/boxwines'>Humppakuutiot</LinkButton>
          </Box>
          <Box flexGrow={1} className={classes.Box}>
            <LinkButton to='/products/wines'>viinit</LinkButton>
          </Box>
          <Box flexGrow={1} className={classes.Box}>
            <LinkButton to='/products/veganwines'>Luomuviinit</LinkButton>
          </Box>
        </Box>
          : null}
        <Box className={classes.search}>
          <SearchBar
            onSearch={value => history.replace(`/search/${value}`)} 
            placeholder='hae...'
          />
        </Box>

        {matches ? <SwipeableDrawer
          open={drawer}
          onOpen={() => setDrawer(true)}
          onClose={() => setDrawer(false)}
        >
          <Box padding={2}>
            <List subheader={<ListSubheader component='div'>
              Kategoriat
            </ListSubheader>}
            >
              <ListItemLink to='/products/beers' primary='Kaljat'/>
              <Divider/>
              <ListItemLink to='/products/ciders' primary='Siiderit'/>
              <Divider/>
              <ListItemLink to='/products/spirits' primary='Väkevät'/>
              <Divider/>
              <ListItemLink to='/products/effervescents' primary='Kuohuviinit'/>
              <Divider/>
              <ListItemLink to='/products/boxwines' primary='Humppakuutiot'/>
              <Divider/>
              <ListItemLink to='/products/wines' primary='Viinit'/>
              <Divider/>
              <ListItemLink to='/products/veganwines' primary='Luomuviinit'/>
            </List>
          </Box>
        </SwipeableDrawer>
          : null}
      </Box>
    </Container>
  )
}

export default ControlBar