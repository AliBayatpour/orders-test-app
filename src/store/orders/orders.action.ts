import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getOrders } from "../../constants/shared/apiUrls.constants";
import { Order } from "../../types/orders/order.type";

export const getOrdersAsync = createAsyncThunk<
  Order[],
  undefined,
  { rejectValue: string }
>("orders/getUsers", async (_, { rejectWithValue, fulfillWithValue }) => {
  try {
    const response = await axios.get<Order[]>(getOrders);
    return fulfillWithValue(response.data);
  } catch (error) {
    return rejectWithValue(error as string);
  }
});
