import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen max-h-full">
    <div className="flex flex-col items-center justify-center bg-gray-100 w-[60vw] m-auto p-4 mt-6 rounded-lg shadow-md">
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold mr-4">Cart</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-full">
        {cartItems.length === 0 ? (
          <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-center">
            Your Cart is Empty
          </div>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
    </div>
  );
};

export default Cart;
