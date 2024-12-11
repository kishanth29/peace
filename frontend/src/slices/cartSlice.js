import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        loading: false,
        shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {},
        completedOrders: localStorage.getItem('completedOrders') ? JSON.parse(localStorage.getItem('completedOrders')) : []
    },
    reducers: {
        addCartItemRequest(state) {
            state.loading = true;
        },
        addCartItemSuccess(state, action) {
            const item = action.payload;
            const isItemExist = state.items.find(i => i.product === item.product);

            if (isItemExist) {
                state.loading = false;
            } else {
                state.items.push(item);
                state.loading = false;
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
        increaseCartItemQty(state, action) {
            const item = state.items.find(i => i.product === action.payload);
            if (item) item.quantity += 1;
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        decreaseCartItemQty(state, action) {
            const item = state.items.find(i => i.product === action.payload);
            if (item) item.quantity -= 1;
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeItemFromCart(state, action) {
            const filteredItems = state.items.filter(item => item.product !== action.payload);
            state.items = filteredItems;
            if (filteredItems.length === 0) {
                localStorage.removeItem('cartItems');
            } else {
                localStorage.setItem('cartItems', JSON.stringify(filteredItems));
            }
        },
        saveShippingInfo(state, action) {
            state.shippingInfo = action.payload;
            localStorage.setItem('shippingInfo', JSON.stringify(action.payload));
        },
        orderCompleted(state) {
            const completedOrder = {
                items: state.items,
                shippingInfo: state.shippingInfo,
                orderDate: new Date().toISOString()
            };
            state.completedOrders.push(completedOrder);
            localStorage.setItem('completedOrders', JSON.stringify(state.completedOrders));
            state.items = [];
            state.loading = false;
            state.shippingInfo = {};
            localStorage.removeItem('shippingInfo');
            localStorage.removeItem('cartItems');
            sessionStorage.removeItem('orderInfo');
        }
    }
});

const { actions, reducer } = cartSlice;

export const {
    addCartItemRequest,
    addCartItemSuccess,
    decreaseCartItemQty,
    increaseCartItemQty,
    removeItemFromCart,
    saveShippingInfo,
    orderCompleted
} = actions;

export default reducer;
