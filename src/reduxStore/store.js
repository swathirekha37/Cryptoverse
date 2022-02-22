
import { configureStore } from '@reduxjs/toolkit'
import {cryptoApi} from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/newsApi'
// import {exchangeApi} from '../services/exchangesApi'

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath] : cryptoApi.reducer,
    [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer
    // [exchangeApi.reducerPath] : exchangeApi.reducer
  },
})

export default store