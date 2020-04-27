import React from 'react'
import { Button, Typography, Box } from '@material-ui/core'
import { Form, Text, TextArea } from 'informed'
import { addComment } from '../queries'
import { useMutation } from '@apollo/client'

const CommentForm = ({ product }) => {
  const [mutateComment] = useMutation(addComment)

  const submit = values => {
    mutateComment({
      variables: {
        id: product.id,
        author: values.author,
        message: values.message
      }
    })
  }

  return (
    <Box display='flex' justifyContent='center'>
      <Form onSubmit={submit}>
        <Box>
          <Typography>Käyttäjänimi</Typography>
          <Text field='author' />
          <Typography>Kommentti</Typography>
          <TextArea field='message'/>
        </Box>
        <Button type='submit'>Lähetä</Button>
      </Form>
    </Box>
  )
}

export default CommentForm