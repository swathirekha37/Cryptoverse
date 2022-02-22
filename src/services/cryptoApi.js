import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': 'cfe44ec9abmshe0ef5b83ef22b9fp1824d9jsn01dcc76355ff'
        }

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({url,headers : cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`coins?limit=${count}`)
        }),
    
        getCoinById : builder.query({
            query : (coinId) => createRequest(`coin/${coinId}`)
        }),
        

    })
})

export const {useGetCryptosQuery, useGetCoinByIdQuery,} =  cryptoApi

console.log(cryptoApi);
console.log(useGetCryptosQuery);