import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // commented syntax is not efficient because it will subscribe on every slice change
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch action to clear the cart
    console.log("Cart cleared");
  };
  return (
    <div className="w-6/12 m-auto">
      <div className="flex justify-center shadow-xl">
        <div className="font-bold text-xl m-4">Cart🛒</div>
      </div>
      <div className="flex justify-end">
        <button
          className="font-bold text-lg m-4 px-2 py-1 rounded-xl  text-white bg-black"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>
      <ItemList items={cartItems} />
      {cartItems.length === 0 && (
        <div className="flex justify-center m-4">
          <h1 className="text-2xl font-bold">
            Cart is Empty... Please add your favorite items 🍕😋
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
