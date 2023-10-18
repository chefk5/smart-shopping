import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ShelfState {
  id: string;
  name: string;
  quantity: number;
  minQuantity: number;
  boughtDate: string;
}

const initialState: ShelfState[] = [];

export const shelfSlice = createSlice({
  name: "shelf",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShelfState>) => {
      const newItem: ShelfState = action.payload;

      state.push(newItem);
    },
  },
});

export const { addItem } = shelfSlice.actions;

export default shelfSlice.reducer;
