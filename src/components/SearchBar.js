import React from 'react'
import { TextField, Box } from '@material-ui/core'
import { Form, asField } from 'informed'

const CustomText = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, forwardedRef, ...rest } = props

  return (
    <React.Fragment>
      <TextField 
        {...rest}
        ref={forwardedRef}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value)
          if (onChange) {
            onChange(e)
          }
        }}
        onBlur={e => {
          setTouched(true)
          if (onBlur) {
            onBlur(e)
          }
        }}
        fullWidth
      />
    </React.Fragment>
  )
})

const SearchBar = ({ onSearch, placeholder }) => {
  return (
    <Box flexGrow={1}>
      <Form onSubmit={values => onSearch(values.search)}>
        <CustomText field={'search'} placeholder={placeholder}/>
      </Form>
    </Box>
  )
}

export default SearchBar