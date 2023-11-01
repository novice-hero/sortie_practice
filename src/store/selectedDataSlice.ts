import { createSlice } from "@reduxjs/toolkit";
import { TableRowData } from "../type";

interface Props {
  data: TableRowData[];
}

const initialState: Props = {
  data: [],
};

const selectedDataSlice = createSlice({
  name: "selectedData",
  initialState,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
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

export const selectedDataReducer = selectedDataSlice.reducer;
export const selectedDataActions = selectedDataSlice.actions;
