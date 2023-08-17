import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Axios for api
import axios from "axios";

const initialState = {
  data: [],
  filteredData: [],
  singleProduct: {},
  loading: false,
  error: "",
};

// Get all products
export const getProducts = createAsyncThunk("getProducts", async () => {
  const res = await axios.get("http://localhost:4000/products");
  return res.data;
});

// Get single products
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id) => {
    const res = await axios.get("http://localhost:4000/products/" + id);
    return res.data;
  }
);

// Get products by category
export const filterByCategory = createAsyncThunk(
  "filterByCategory",
  async (category) => {
    const res = await axios.get(
      "http://localhost:4000/products?category=" + category
    );
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // All data
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
      state.error = "Error is getting data";
    });
    // Filtered data
    builder.addCase(filterByCategory.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(filterByCategory.fulfilled, (state, action) => {
      state.filteredData = action.payload;
      state.loading = false;
    });
    builder.addCase(filterByCategory.rejected, (state) => {
      state.loading = false;
      state.error = "Error is getting data";
    });
    // Product details
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
      state.loading = false;
    });
    builder.addCase(getSingleProduct.rejected, (state) => {
      state.loading = false;
      state.error = "Error is getting data";
    });
  },
});

export default productSlice.reducer;
