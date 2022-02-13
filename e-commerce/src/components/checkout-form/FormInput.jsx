import React from 'react'
import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
        <Controller 
            render={({ field: { onChange, value } }) => (
              <TextField 
                fullWidth 
                onChange={onChange} 
                name={name}
                // value={value} 
                label={label} 
                required={required} 
              />
            )}
            control={control}
        />
    </Grid>
  )
}

export default FormInput