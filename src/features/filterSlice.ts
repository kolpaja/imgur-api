import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IFilters {
  section?: "hot" | "top" | "user"
  sort?: "viral" | "top" | "time" | "rising"
  window?: "day" | "week" | "month" | "year" | "all"
  page: number
  showViral?: boolean
}

const initialState: IFilters = {
  section: "hot",
  sort: "viral",
  window: "day",
  page: 0,
  showViral: true,
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state: IFilters, actions: PayloadAction<IFilters>) => {
      return (state = { ...state, ...actions.payload })
    },
    nextPage: (state: IFilters) => {
      state.page += 1
    },
    previousPage: (state: IFilters) => {
      state.page -= 1
    },
  },
})

export const { changeFilters, nextPage, previousPage } = filtersSlice.actions

export default filtersSlice.reducer
