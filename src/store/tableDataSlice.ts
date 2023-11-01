import { createSlice } from "@reduxjs/toolkit";
import { TableRowData } from "../type";

interface TableDataProps {
  data: TableRowData[];
  currentPage: number;
  endPage: number;
  limit: number;
}

const initialState: TableDataProps = {
  data: [],
  currentPage: 1,
  endPage: 1,
  limit: 10,
};

const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setEndPage(state, action) {
      state.endPage = Math.ceil(action.payload.length / state.limit);
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

export const tableDataReducer = tableDataSlice.reducer;
export const tableDataActions = tableDataSlice.actions;
