import React from "react";
import { useProductCOntext } from "../context/ProductContext";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useProductCOntext();

  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleTotal = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col md:flex-row p-2">
      <div className="w-full lg:w-2/3">
        {cart.length > 0 ? (
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">
              Shopping bag item {cart.length}
            </h1>
            <div className="grid grid-cols-3 gap-2">
              {cart.map((item) => (
                <div key={item.id} className=" flex flex-col gap-2">
                  <img src={item.images[0]} alt={item.title} />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                  <div className="bg-gray-100 flex gap-4">
                    <button
                      className="border px-2"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="border px-2 cursor-pointer"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-gray-200 p-2 "
                      onClick={() => removeFromCart(item.id)}
                    >
                      <IoMdClose size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>No product add in cart</h1>
          </div>
        )}
      </div>
      <div className=" w-full lg:w-1/3">
        {cart.length > 0 && (
          <div className="flex flex-col items-start gap-2">
            <div>
              <h2 className="text-4xl">Order Summary</h2>
              <div className="flex flex-row justify-between">
                <span className="text-xl">Total</span>
                <span className="text-lg">${calculateTotalPrice()}</span>
              </div>
            </div>
            <button
              className="bg-black text-white py-2 px-4"
              onClick={handleTotal}
            >
              Process to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
