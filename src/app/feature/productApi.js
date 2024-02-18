import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// all product get
export const productCall = createAsyncThunk(
    "productCall",
    async () => {
        const response = await fetch("https://dummyjson.com/products");
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error)
        }
    }
);

// single product
export const productDetails = createAsyncThunk(
    "productDetails",
    async (id) => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error)
        }
    }
);

// product categories
export const categories = createAsyncThunk(
    "categories",
    async () => {
        const response = await fetch("https://dummyjson.com/products/categories");
        try {
            const result = await response.json();
            return result
        } catch (error) {
            console.log(error)
        }
    }
);

// product category display
export const category = createAsyncThunk(
    "category",
    async (c) => {
        const response = await fetch(`https://dummyjson.com/products/category/${c}`);
        try {
            const result = await response.json();
            return result
        } catch (error) {
            console.log(error);
        }
    }
);

// product search
export const searchProduct = createAsyncThunk(
    "searchProduct",
    async (searchTerm) => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
)


export const productAPI = createSlice({
    name: "productCall",
    initialState: {
        isLoading: false,
        data: [],
        cate: [],
        scate: [],
        search: [],
        isError: null,
    },
    extraReducers: {
        // all product get
        [productCall.pending]: (state) => {
            state.isLoading = true;
        },
        [productCall.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [productCall.rejected]: (state, action) => {
            state.isLoading = false;
            state.iserror = action.payload;
        },

        // Product details
        [productDetails.pending]: (state) => {
            state.isLoading = true;
        },
        [productDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [productDetails.rejected]: (state, action) => {
            state.isLoading = false;
            state.iserror = action.payload;
        },

        // product categories
        [categories.pending]: (state) => {
            state.isLoading = true;
        },
        [categories.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cate = action.payload;
        },
        [categories.rejected]: (state, action) => {
            state.isLoading = false;
            state.iserror = action.payload;
        },

        // product category display
        [category.pending]: (state) => {
            state.isLoading = true;
        },
        [category.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.scate = action.payload;
        },
        [category.rejected]: (state, action) => {
            state.isLoading = false;
            state.iserror = action.payload;
        },

        // product search
        [searchProduct.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.search = action.payload;
        },
        [searchProduct.rejected]: (state, action) => {
            state.isLoading = false;
            state.iserror = action.payload;
        },
    }
})

export default productAPI.reducer