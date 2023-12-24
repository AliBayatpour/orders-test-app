import {
  idErrorMessage,
  requiredErrorMessage,
  zeroErrorMessage,
} from "../../constants/Orders/orders.constants";
import { AddOrderForm } from "../../types/orders/addOrderForm.type";
import { Order } from "../../types/orders/order.type";

export const validateOnChange = <T extends keyof AddOrderForm>(
  key: T,
  value: AddOrderForm[T]["value"],
  currentOrders: Order[],
): {
  message: string;
  valueNotAllowed: boolean;
} => {
  const defaultValidation = { message: "", value, valueNotAllowed: false };

  switch (key) {
    case "total":
      if (+value < 0) {
        return {
          message: zeroErrorMessage,
          valueNotAllowed: true,
        };
      } else if (+value === 0) {
        return {
          message: zeroErrorMessage,
          valueNotAllowed: false,
        };
      }
      return defaultValidation;
    case "quantity":
      if (+value <= 0 || value.toString().includes(".")) {
        return {
          message: zeroErrorMessage,
          valueNotAllowed: true,
        };
      }
      return defaultValidation;
    case "id":
      if (!value) {
        return { message: requiredErrorMessage, valueNotAllowed: false };
      }
      if (currentOrders.some((order) => order.id === value)) {
        return {
          message: idErrorMessage,
          valueNotAllowed: false,
        };
      }
      return defaultValidation;
    default:
      if (!value) {
        return { message: requiredErrorMessage, valueNotAllowed: false };
      }
      return defaultValidation;
  }
};

export const onFormSubmitValidation = (orderForm: AddOrderForm): boolean => {
  for (const key in orderForm) {
    if (
      !orderForm[key as keyof AddOrderForm].value ||
      orderForm[key as keyof AddOrderForm].error
    ) {
      return false;
    }
  }
  return true;
};
