import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    createItem(state, action) {
      const newItem = action.payload;
      state.items.push({
        id: newItem.id,
        name: newItem.name,
        age: newItem.age,
        email: newItem.email,
        address: newItem.address,
      });
    },
    deleteItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateItem(state, action) {
      const updatedItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === updatedItem.id
      );
      existingItem.id = updatedItem.id;
      existingItem.name = updatedItem.name;
      existingItem.age = updatedItem.age;
      existingItem.email = updatedItem.email;
      existingItem.address = updatedItem.address;
    },
    getItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const tableActions = tableSlice.actions;
export default tableSlice;
