import React from 'react'
import {
  Container,
  Box,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import ReactPlayer from 'react-player'

const useStyles = makeStyles(() => ({
  header: {
    marginTop: '10vh',
    marginLeft: '2vw',
    marginRight: '2vw',
    marginBottom: '5vh',
    backgroundColor: fade('#000', 0.5),
    padding: 25,
    color: 'white',
    textAlign: 'center'
  },
  container: {
    marginLeft: '2vw',
    marginRight: '2vw',
  },
  box: {
    backgroundColor: fade('#000', 0.5),
    padding: 15,
    color: 'white'
  }
}))

const MainPage = () => {
  const classes = useStyles()

  return (
    <Container>
      <Box display='flex' flexDirection='column'>
        <Box flexGrow={1} className={classes.header}>
          <Typography variant='h3'>
            Kaikki yhden ja yksi kaikkien kaljojen puolesta
          </Typography>
        </Box>
        <Box display='flex' flexGrow={1} className={classes.container}>
          <Box flexGrow={1} marginRight={2} className={classes.box}>
            <Typography variant='h5'>
              KAVIndex kuvaa alkoholituotteen viinallisuutta.
              Tuotteen viinallisuus on suure, joka kuvaa alkoholin
              määrän suhdetta tuotteen hintaan. Mitä pienempi KAVI
              sen suurempi viinallisuus. Viiking Strong Beer on asetettu
              indeksiksi 1 ja Jack Daniels Black Label on asetettu
              indeksiksi 10
            </Typography>
          </Box>
          <Box flexGrow={1} marginLeft={2} className={classes.box}>
            <ReactPlayer url='https://www.youtube.com/watch?v=uypeEMD7RHw'/>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default MainPage