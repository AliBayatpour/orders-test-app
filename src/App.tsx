import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AddOrderModal from "./components/orders/AddOrderModal";
import FilterOrders from "./components/orders/FilterOrders";
import Orders from "./components/orders/Orders";
import { getOrdersAsync } from "./store/orders/orders.action";
import { AppDispatch } from "./store/store";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [showAddOrderModal, setShowAddOrderModal] = useState(false);

  useEffect(() => {
    dispatch(getOrdersAsync());
  }, []);

  const onCloseModal = () => {
    setShowAddOrderModal(false);
  };
  return (
    <div className="relative w-full">
      {showAddOrderModal && <AddOrderModal onCloseModal={onCloseModal} />}
      <div className="max-w-6xl mx-auto py-5 px-3">
        <FilterOrders onShowAddOrderModal={() => setShowAddOrderModal(true)} />
        <Orders />
      </div>
    </div>
  );
};

export default App;
