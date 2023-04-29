import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// Think of global store as an entire cake. Reducer is a slice of that cake.
// middleware allows us to do something with the state before we send it to the reducer
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});

//we configure the store
//store is a global state that saves all the information of the app
//usually we don't need the entire state, we only need to reduce it to a specific slice
//in this case, it's the "articleApi" (meaning we just want something from this API)
//we add it to our reducer and middleware