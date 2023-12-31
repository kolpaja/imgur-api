import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import filterReducer from "../features/filterSlice"
import searchFilterReducer from "../features/searchFilterSlice"
import layoutTypeReducer from "../features/layoutSlice"
import { galleryApi } from "../features/galleryApi"
import { usersApi } from "../features/usersApi"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filters: filterReducer,
    layoutType: layoutTypeReducer,
    searchFilters: searchFilterReducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(galleryApi.middleware, usersApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
