import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: JSON.parse(localStorage.getItem('cart')) || [],
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;
            const existingProduct = state.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.qty += 1;
            } else {
                state.push({ ...product, qty: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },

        removeItem: (state, action) => {
            const product = action.payload;
            const existingProductIndex = state.findIndex((item) => item.id === product.id);
            if (existingProductIndex !== -1) {
                const existingProduct = state[existingProductIndex];
                if (existingProduct.qty > 1) {
                    existingProduct.qty -= 1;
                } else {
                    state.splice(existingProductIndex, 1);
                }
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
