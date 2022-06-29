import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ricksAndMortysApi = createApi({
    reducerPath: 'ricksAndmortys',
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://rickandmortyapi.com/api'
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: () =>'/character'
        }),
        getRicksAndMortys: builder.query({
            query: (page) => `/character/?page=${page}`
        }),
        getCharacterByName: builder.query({
            query: (name) => `/character/?name=${name}`
        }),
        getCharacterById: builder.query({
            query: (id) => `/character/${id}`
        }),
    })
})
export const {useGetCharactersQuery,useGetRicksAndMortysQuery, useGetCharacterByNameQuery, useGetCharacterByIdQuery} = ricksAndMortysApi;