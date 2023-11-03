import { createSlice } from "@reduxjs/toolkit";
import { TableRowData } from "../type";

interface Props {
  data: TableRowData[];
}

const initialState: Props = {
  data: [],
};

const checkedDataSlice = createSlice({
  name: "checkedData",
  initialState,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
    },
    addAlldata(state, action) {
      state.data = action.payload;
    },
    removeData(state, action) {
      state.data = state.data.filter(
        (prev) => prev.registrationNumber !== action.payload.registrationNumber
      );
    },
    resetData(state) {
      state.data = [];
    },
  },
});

export const checkedDataReducer = checkedDataSlice.reducer;
export const checkedDataActions = checkedDataSlice.actions;
