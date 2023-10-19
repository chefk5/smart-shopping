import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ShelfState {
  id: string;
  name: string;
  quantity: number;
  minQuantity: number;
  boughtDate: string;
}

interface InitialState {
  items: ShelfState[];
}

const initialState: InitialState = {
  items: [],
};

export const shelfSlice = createSlice({
  name: "shelf",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShelfState>) => {
      const newItem: ShelfState = action.payload;

      state.items.push(newItem);
    },
    incrementItem: (state, action: PayloadAction<string>) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (selectedItem) {
        selectedItem.quantity = selectedItem?.quantity + 1;
      }
    },
    decrementItem: (state, action: PayloadAction<string>) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (selectedItem && selectedItem.quantity >= 0) {
        selectedItem.quantity = selectedItem?.quantity - 1;
      }
    },
    editItem: (state, action: PayloadAction<ShelfState>) => {
      const { id, name, quantity, minQuantity, boughtDate } = action.payload;

      const selectedItem = state.items.find((item) => item.id === id);

      if (selectedItem) {
        selectedItem.name = name;
        selectedItem.quantity = quantity;
        selectedItem.minQuantity = minQuantity;
        selectedItem.boughtDate = boughtDate;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const selectedItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (selectedItemIndex > -1) {
        state.items.splice(selectedItemIndex, 1);
      }
    },
  },
});

export const { addItem, incrementItem, decrementItem, editItem, deleteItem } =
  shelfSlice.actions;

export default shelfSlice.reducer;
