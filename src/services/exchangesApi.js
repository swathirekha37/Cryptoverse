import { createApi,fetchBaseQuery,fetchBaseQuesry } from "@reduxjs/toolkit/dist/query";

const exchangeApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'cfe44ec9abmshe0ef5b83ef22b9fp1824d9jsn01dcc76355ff'
}

const baseUrl = "https://coinranking1.p.rapidapi.com/"

const createRequest = (url) => ({url,exchangeApiHeaders})

export const exchangeApi = createApi({
    reducerPath : 'exchangeApi',
    baseQuery : fetchBaseQuery({baseUrl}),

   endpoints : (builder) => ({
       getExchange : builder.query({
           query : () => createRequest(`exchanges`)
       })
   })
})
console.log(exchangeApi);

export const {useGetExchangeQuery} = exchangeApi
