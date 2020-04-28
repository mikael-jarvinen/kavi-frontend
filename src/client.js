import { 
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { querySortingFilter, queryModalOpen } from './queries'
require('dotenv').config()

let uri = '/graphql'
if (process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:5000/graphql'
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri,
  })
})

client.writeQuery({
  query: querySortingFilter,
  data: { sortingFilter: 'Name' }
})

client.writeQuery({
  query: queryModalOpen,
  data: { modalOpen: false }
})

export default client