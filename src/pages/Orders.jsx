import { useLocation } from 'react-router-dom';

const Orders = () => {
  const location = useLocation();
  console.log(location);
  return <div>Orders</div>;
};

export default Orders;
