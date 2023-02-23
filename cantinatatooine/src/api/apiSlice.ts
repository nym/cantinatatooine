// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const swApi = createApi({
  reducerPath: "swApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    // By using just the list APIs, I hope to reduce queries
    // since they will get cached by Redux Query RTK
    // PERSON (character)
    getPersonList: builder.query({
      query: () => `people/`,
    }),

    // PLANETS
    getPlanetList: builder.query({
      query: () => `planets/`,
    }),

    // FILMS
    getFilmList: builder.query({
      query: () => `films/`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPersonListQuery,
  useGetPlanetListQuery,
  useGetFilmListQuery,
} = swApi;
