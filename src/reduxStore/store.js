
//  connect api with Store

//  homepage include use hook and  console and see data


// import { createStore } from "redux";

// export default store = createStore({
//     reducer : {
//         [.reducerPath] = .reducer
//     }
// })

import { configureStore } from '@reduxjs/toolkit'
import {cryptoApi} from '../services/cryptoApi'

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath] : cryptoApi.reducer
  },
})

export default store