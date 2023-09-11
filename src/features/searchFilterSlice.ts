import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// if sort is  'top' then we add the window option
export interface ISearchFilters {
  sort: "viral" | "top" | "time"
  window?: "day" | "week" | "month" | "year" | "all"
  page: number
}

const initialState: ISearchFilters = {
  sort: "viral",
  window: "all",
  page: 0,
}

export const searchFilterSlice = createSlice({
  name: "search-filters",
  initialState,
  reducers: {
    changesSearchFilters: (
      state: ISearchFilters,
      actions: PayloadAction<ISearchFilters>,
    ) => {
      return (state = actions.payload)
    },
    nextSearchPage: (state: ISearchFilters) => {
      state.page += 1
    },
    previousSearchPage: (state: ISearchFilters) => {
      state.page -= 1
    },
  },
})

export const { changesSearchFilters, nextSearchPage, previousSearchPage } =
  searchFilterSlice.actions

export default searchFilterSlice.reducer
