import { useDispatch, useSelector } from "react-redux";
import colors from "tailwindcss/colors";
import Plus from "../../assets/svgs/Plus";
import { selectCurrentOrders } from "../../store/orders/orders.selector";
import { ordersActions } from "../../store/orders/orders.slice";
import { AppDispatch } from "../../store/store";
import { filterCurrentOrders } from "../../utils/orders/filterOrders.utils";
import Input from "../shared/Input";

type Props = {
  onShowAddOrderModal: () => void;
};
const FilterOrders: React.FC<Props> = ({ onShowAddOrderModal }) => {
  const currentOrders = useSelector(selectCurrentOrders);
  const dispatch: AppDispatch = useDispatch();

  const onFilterChange = (value: string) => {
    const filteredOrders = filterCurrentOrders(currentOrders, value);
    dispatch(ordersActions.setFilteredOrders(filteredOrders));
  };
  return (
    <div className="py-2 mb-4 flex">
      <h1>Orders</h1>
      <div className="flex items-center ml-auto">
        <div className="me-2">
          <Input
            type="text"
            placeholder="Filter orders"
            onChange={onFilterChange}
          />
        </div>
        <button className="btn-sky" onClick={onShowAddOrderModal}>
          <Plus fill={colors.white} />
        </button>
      </div>
    </div>
  );
};

export default FilterOrders;
