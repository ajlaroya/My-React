import React from 'react'
import { makeStyles } from '@mui/styles'
import ImageCard from './ImageCard'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    }
}))

const Plants = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ImageCard />
    </div>
  )
}

export default Plants