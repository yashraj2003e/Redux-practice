import { useSelector } from "react-redux";
import store from "../../store";

function Customer() {
  const customer = useSelector((store) => store.customerReducer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
