import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../services/axios";

export const fetchProduct = createAsyncThunk('product/fetchAll', async () => {
    const response = await axios.get('/products');
    return response.data
})

export const fetchPaginationProduct = createAsyncThunk('product/fetchPagination', async ({limit:limit,skip:skip}) => {
    const response = await axios.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data    
});

const productSlice = createSlice({
    name: 'allProduct',
    initialState: {
        product: null,
        categProduct:null,
    },
    reducers: {
        allProducts: (state, action) => {
            state.product = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.product = action.payload;
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.product = action.payload;
        })

        
        builder.addCase(fetchPaginationProduct.fulfilled, (state, action) => {
            state.categProduct = action.payload;
        })
    }

})

export const { allProducts } = productSlice.actions;
export default productSlice.reducer;