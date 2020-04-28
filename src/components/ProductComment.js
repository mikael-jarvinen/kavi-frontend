import React from 'react'
import {
  Typography,
  Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  commentDiv: {
    border: '1px solid grey',
    marginTop: 10,
    paddingTop: 5,
    marginBottom: 10,
    paddingBottom: 5,
    borderRadius: 2
  },
}))

const ProductComment = ({ comment }) => {
  const classes = useStyles()

  const commentDate = Date.parse(comment.date)
  const currentDate = new Date()
  let timeDiff = (currentDate - commentDate) / (1000 ) //diff in seconds
  let timeUnit = 'seconds'
  if (timeDiff >= 60) {
    timeDiff = timeDiff / 60  //diff in minutes
    timeUnit = 'minutes'
  }
  if (timeDiff >= 60) {
    timeDiff = timeDiff / 60 //diff in hours
    timeUnit = 'hours'
  }
  if (timeDiff >= 24) {
    timeDiff = timeDiff / 24 //diff in days
    timeUnit = 'days'
  }

  timeDiff = parseInt(timeDiff, 10)

  return (
    <div className={classes.commentDiv}>
      <Box display='flex'>
        <Typography variant='subtitle1'>{comment.author}</Typography> 
        <Box flexGrow={1} display='flex' justifyContent='flex-end'>
          <Typography variant='caption'>
            {timeDiff} {timeUnit} ago
          </Typography>
        </Box>
      </Box>
      <Typography variant='caption'>{comment.message}</Typography>
    </div>
  )
}

export default ProductComment