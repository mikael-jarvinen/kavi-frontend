import React from 'react'
import {
  Container,
  Box,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
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
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container>
      <Box display='flex' flexDirection='column'>
        <Box flexGrow={1} className={classes.header}>
          <Typography variant='h3'>
            Kaikki yhden ja yksi kaikkien kaljojen puolesta
          </Typography>
        </Box>
        <Box
          display='flex'
          flexGrow={1}
          className={classes.container}
          flexWrap={matches ? 'wrap' : 'nowrap'}
        >
          <Box flexGrow={1} margin={1} className={classes.box}>
            <Typography variant='h5'>
              KAVIndex kuvaa alkoholituotteen viinallisuutta.
              Tuotteen viinallisuus on suure, joka kuvaa alkoholin
              määrän suhdetta tuotteen hintaan. Mitä pienempi KAVI
              sen suurempi viinallisuus. Viiking Strong Beer on asetettu
              indeksiksi 1 ja Jack Daniels Black Label on asetettu
              indeksiksi 10
            </Typography>
          </Box>
          <Box
            flexGrow={1}
            margin={1}
            className={classes.box}
            display='flex'
            justifyContent='center'
            minWidth='50%'
          >
            <ReactPlayer
              url='https://www.youtube.com/watch?v=mXVd3_ZM5wI'
              width={'100%'}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default MainPage
