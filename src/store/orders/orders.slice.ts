import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Order } from "../../types/orders/order.type";
import { OrderReducerState } from "../../types/store/orderReducerState.type";
import { getOrdersAsync } from "./orders.action";

const initialState: OrderReducerState = {
  currentOrders: [],
  filteredOrders: [],
  isLoading: false,
  error: undefined,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setFilteredOrders(state, action: PayloadAction<Order[]>) {
      state.filteredOrders = action.payload;
    },
    setCurrentAndFilteredOrders(state, action: PayloadAction<Order[]>) {
      state.currentOrders = action.payload;
      state.filteredOrders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrdersAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentOrders = action.payload;
      state.filteredOrders = action.payload;
      state.error = undefined;
    });
    builder.addCase(getOrdersAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const ordersActions = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
export const ordersSliceName = ordersSlice.name;
