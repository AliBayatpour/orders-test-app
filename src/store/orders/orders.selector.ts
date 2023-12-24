import { createSelector } from "reselect";
import { RootState } from "../store";

const selectOrderReducer = (state: RootState) => state.orders;

export const selectCurrentOrders = createSelector(
  [selectOrderReducer],
  (orders) => orders.currentOrders,
);
export const selectFilteredOrdersLength = createSelector(
  [selectOrderReducer],
  (orders) => orders.filteredOrders.length,
);
export const selectFilteredOrders = createSelector(
  [selectOrderReducer],
  (orders) => orders.filteredOrders,
);

export const selectOrdersLoading = createSelector(
  [selectOrderReducer],
  (orders) => orders.isLoading,
);

export const selectOrdersError = createSelector(
  [selectOrderReducer],
  (orders) => orders.error,
);
