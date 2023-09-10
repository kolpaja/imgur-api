import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import filterReducer from "../features/filterSlice"
import searchFilterReducer from "../features/searchFilterSlice"
import { galleryApi } from "../features/galleryApi"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filters: filterReducer,
    searchFilters: searchFilterReducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(galleryApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
