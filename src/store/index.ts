import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modalSlice";
import { tableDataReducer } from "./tableDataSlice";
import { sortClickReducer } from "./sortClickSlice";
import { checkedDataReducer } from "./checkedDataSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    tableData: tableDataReducer,
    sortClick: sortClickReducer,
    checkedData: checkedDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
