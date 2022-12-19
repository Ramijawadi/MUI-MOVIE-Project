import { Alert } from '@mui/material'
import React from 'react'

const ErrorMessage = ({error}) => {
  return (
    <div>
        <Alert severity="error">{error}</Alert>
    </div>
  )
}

export default ErrorMessage
