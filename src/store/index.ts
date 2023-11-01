import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modalSlice";
import { tableDataReducer } from "./tableDataSlice";
import { sortClickReducer } from "./sortClickSlice";
import { selectedDataReducer } from "./selectedDataSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    tableData: tableDataReducer,
    sortClick: sortClickReducer,
    selectedData: selectedDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
