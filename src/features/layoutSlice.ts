import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ILayoutType {
  layoutType?: "waterfall" | "uniform"
}

const initialState: ILayoutType = {
  layoutType: "uniform",
}

export const layoutSlice = createSlice({
  name: "layoutType",
  initialState,
  reducers: {
    toggleLayout: (state: ILayoutType, actions: PayloadAction<ILayoutType>) => {
      return (state = actions.payload)
    },
  },
})

export const { toggleLayout } = layoutSlice.actions

export default layoutSlice.reducer
