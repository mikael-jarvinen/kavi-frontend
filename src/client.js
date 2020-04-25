import { 
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { querySortingFilter } from './queries'

const uri = process.env.APOLLO_URI || 'http://localhost:5000'

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

export default client