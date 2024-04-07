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
    <div className="min-h-screen max-h-full mb-20">
    <div className="lg:w-[50vw] md:w-[70vw] flex flex-col justify-center bg-cyan-50 m-auto mt-20 rounded-md p-4">
      <div className="flex items-center mb-8 w-full justify-between">
        <div></div>
        <h1 className="text-3xl font-bold mr-4">Cart</h1>
        <button
          className="px-4 py-2 text-white rounded-lg font-medium bg-[#ff8522] hover:bg-[#ff4a22] transition-colors"
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
          <ItemList items={cartItems} flag={true}/>
        )}
      </div>
    </div>
    </div>
  );
};

export default Cart;
