import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Order } from "../type";

type SortLabel =
  | "registrationNumber"
  | "documentEvaluation"
  | "writtenEvaluation";

interface Props {
  currentLabel: SortLabel;
  currentOrder: Order;
}

const initialState: Props = {
  currentLabel: "registrationNumber",
  currentOrder: "asc",
};

const sortClickSlice = createSlice({
  name: "sortClick",
  initialState,
  reducers: {
    update(state, action: PayloadAction<SortLabel>) {
      state.currentLabel = action.payload;
      state.currentOrder === "asc"
        ? (state.currentOrder = "desc")
        : (state.currentOrder = "asc");
    },
  },
});

export const sortClickReducer = sortClickSlice.reducer;
export const sortClickActions = sortClickSlice.actions;
