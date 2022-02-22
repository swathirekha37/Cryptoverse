import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'cfe44ec9abmshe0ef5b83ef22b9fp1824d9jsn01dcc76355ff'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/'

const createRequest = (url) => ({url,headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptoNews : builder.query({
            query : ({newsCategory,count}) => createRequest(`search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery} =  cryptoNewsApi



  