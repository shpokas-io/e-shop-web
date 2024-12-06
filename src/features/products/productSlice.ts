import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsMockData } from "./productsMockData";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: productsMockData,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
