// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    // PERSON (character)
    getPersonList: builder.query({
        query: () => `people/`,
    }),
  }),
})
    

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetPersonListQuery } = swApi