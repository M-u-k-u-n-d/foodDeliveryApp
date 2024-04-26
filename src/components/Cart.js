import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (cartItems.length == 0) ? 
  <div className="flex flex-col gap-2 items-center lg:w-[50vw] md:w-[70vw] m-auto mb-16" >
  <img src="https://i.pinimg.com/originals/8a/70/f6/8a70f68a486e0f125e8ff176757c2194.png" alt="cart-img" />
  <Link to="/"><button className="rounded-lg bg-[#ff8522] hover:bg-[#ff4a22] hover:text-white p-2"> GET RESTAURANTS NEAR YOU</button>
  </Link>
  </div>
  : (
    <div className="min-h-screen max-h-full mb-20">
      <div className="lg:w-[50vw] md:w-[70vw] flex flex-col justify-center bg-cyan-50 m-auto mt-20 rounded-md p-4">
        <div className="flex items-center mb-8 w-full justify-between">
        
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
            <div className="">
              <img
                src="https://i.pinimg.com/originals/8a/70/f6/8a70f68a486e0f125e8ff176757c2194.png"
                alt="cart-img"
              />
            </div>
          ) : (
            <ItemList items={cartItems} flag={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
