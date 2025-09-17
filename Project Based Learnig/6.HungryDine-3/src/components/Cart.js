import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mt-34">
      <h1 className="font-bold text-4xl text-center"> cart</h1>

      {cartItems.length === 0 ? (
        <h1 className="text-center font-bold mt-12">
          Your cart is empty. Add your favorite food from favorite restaurant
        </h1>
      ) : (
        <div className="flex justify-end mr-8">
          <button
            className="px-4 py-2 rounded-lg m-4 bg-black text-white cursor-pointer"
            onClick={handleClearCart}
          >
            clear cart
          </button>
        </div>
      )}
      <div className="w-6/12 mx-auto">
        <Items items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
