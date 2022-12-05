import { Box, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return (
    <Box sx={{ display : "flex" , alignItems:"flex-end"}}>
    <SearchIcon fontSize='large' sx={{marginRight:"2px"}} color = 'primary' />
    <TextField id="standard-basic" label="Search" variant="standard" fullWidth color='primary'/>
    </Box>
  )
}

export default SearchBar