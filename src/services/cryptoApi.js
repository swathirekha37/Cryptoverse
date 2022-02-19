// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'cfe44ec9abmshe0ef5b83ef22b9fp1824d9jsn01dcc76355ff'
//     }
//   };

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
            query : () => createRequest('coins')
        }),
        getCoinById : builder.query({
            query : () => createRequest('coin/Qwsogvtv82FCd')
        })
    })
})
console.log("data from api",cryptoApi);
export const {useGetCryptosQuery, useGetCoinByIdQuery} =  cryptoApi