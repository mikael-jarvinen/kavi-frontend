import { 
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { querySortingFilter, queryModalOpen } from './queries'

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

client.writeQuery({
  query: queryModalOpen,
  data: { modalOpen: false }
})

export default client