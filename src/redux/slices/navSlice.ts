import { createSlice } from "@reduxjs/toolkit";

interface NavState {
  grouping: string;
  ordering: string;
}

const initialState: NavState = {
  grouping: "",
  ordering: "",
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setGrouping: (state, action: PayloadAction<string>) => {
      state.grouping = action.payload;
    },
    setOrdering: (state, action: PayloadAction<string>) => {
      state.ordering = action.payload;
    },
  },
});

export const { setGrouping, setOrdering } = navSlice.actions;
export default navSlice.reducer;
