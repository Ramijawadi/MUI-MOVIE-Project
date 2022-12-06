import { Box } from '@mui/material'
import React from 'react'

import FoundedMovies from './components/FoundedMovies'
import SearchBar from './components/SearchBar'

const Home = () => {
  return (
    <Box>
    <SearchBar />
    <FoundedMovies/>
    </Box>
  )
}

export default Home