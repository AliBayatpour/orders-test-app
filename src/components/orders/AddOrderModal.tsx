import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderStatusOptions } from "../../constants/Orders/orders.constants";
import { selectCurrentOrders } from "../../store/orders/orders.selector";
import { ordersActions } from "../../store/orders/orders.slice";
import { AddOrderForm } from "../../types/orders/addOrderForm.type";
import { Order } from "../../types/orders/order.type";
import { SelectOption } from "../../types/shared/selectOption.type";
import {
  onFormSubmitValidation,
  validateOnChange,
} from "../../utils/orders/addOrderValidation.utils";
import DatePicker from "../shared/DatePicker";
import Input from "../shared/Input";
import Select from "../shared/Select";

type Props = {
  onCloseModal: () => void;
};

const AddOrderModal: React.FC<Props> = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const currentOrders = useSelector(selectCurrentOrders);

  const [orderForm, setOrderForm] = useState<AddOrderForm>({
    id: { value: "", error: "" },
    total: { value: "", error: "" },
    quantity: { value: "1", error: "" },
    date: { value: new Date(), error: "" },
    status: { value: orderStatusOptions[0], error: "" },
  });

  const onChangeFormValue = (
    key: keyof AddOrderForm,
    value: AddOrderForm[keyof AddOrderForm]["value"],
  ) => {
    const { message, valueNotAllowed } = validateOnChange(
      key,
      value,
      currentOrders,
    );
    if (valueNotAllowed) {
      return;
    }
    setOrderForm((prevVal) => ({
      ...prevVal,
      [key]: { value, error: message },
    }));
  };

  const submitForm = () => {
    const newOrder: Order = {
      id: orderForm.id.value,
      total: orderForm.total.value,
      quantity: orderForm.quantity.value,
      status: orderForm.status.value["value"] as Order["status"],
      date: orderForm.date.value.toISOString().slice(0, 10),
    };
    dispatch(
      ordersActions.setCurrentAndFilteredOrders([newOrder, ...currentOrders]),
    );
    onCloseModal();
  };

  const formIsValid = onFormSubmitValidation(orderForm);

  return (
    <>
      <div className="absolute w-screen h-screen bg-gray-800 bg-opacity-50 z-10 flex items-center justify-center">
        <div className="xl:w-1/3 max-h-96 bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="py-4 text-left px-6">
            <h2 className="mb-4">Add order</h2>
            <form className="grid grid-cols-2 gap-4">
              <Input
                label="Id"
                placeholder="Order ID"
                type="text"
                onChange={(value) => onChangeFormValue("id", value)}
                value={orderForm.id.value}
                errorMessage={orderForm.id.error}
              />
              <Select
                label="Status"
                options={orderStatusOptions}
                value={orderForm.status.value}
                onChange={(value) =>
                  onChangeFormValue("status", value as SelectOption)
                }
              />
              <DatePicker
                label="Date"
                onChange={(value) => value && onChangeFormValue("date", value)}
                value={orderForm.date.value}
              />
              <Input
                label="Quantity"
                type="number"
                onChange={(value) => onChangeFormValue("quantity", value)}
                value={orderForm.quantity.value}
                errorMessage={orderForm.quantity.error}
              />
              <Input
                label="Total"
                type="number"
                onChange={(value) => onChangeFormValue("total", value)}
                placeholder="Filter orders"
                value={orderForm.total.value}
                errorMessage={orderForm.total.error}
              />
            </form>
            <div className="w-full mt-4 flex justify-between">
              <button className="btn-rose" type="button" onClick={onCloseModal}>
                Cancel
              </button>
              <button
                className={`btn-sky ${!formIsValid && "btn-disabled"}`}
                type="button"
                disabled={!formIsValid}
                onClick={submitForm}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOrderModal;
