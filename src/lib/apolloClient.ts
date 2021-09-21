import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import 'cross-fetch/polyfill'

// export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_URL,
      headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_KEY,
      },
    }),

    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (initialState = null) => {
  const _appoloClient = apolloClient ?? createApolloClient()
  // サーバーサイド処理時は常にappoloClientを作成
  if (typeof window === 'undefined') return _appoloClient
  // クライアント再度は一度のみ
  if (!apolloClient) apolloClient = _appoloClient

  return _appoloClient
}
