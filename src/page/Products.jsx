import React from "react";
import { useProductCOntext } from "../context/ProductContext";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, addToCart } = useProductCOntext();

  return (
    <div className="max-w-[1400px] m-auto w-full flex flex-col gap-4 p-4">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-semibold italic">Our Products</h1>
        <div className="w-[100px] h-[2px] bg-gray-400" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.slice(0, 24).map((item) => (
          <div
            key={item.id}
            className="rounded-2xl shadow-2xl px-4 py-4 bg-gray-100"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className=" w-full rounded-2xl"
            />
            <div className="flex items-center justify-between mt-4">
              <div>
                <h2 className="font-medium text-lg mt-2">{item.title}</h2>
                <p>${item.price}</p>
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => addToCart(item.id)}
                  className="bg-gray-300 p-2 rounded-full mt-4"
                >
                  <FiPlus size={25} />
                </button>
                <Link
                  to={`/products/${item.id}`}
                  className="bg-gray-300 p-2 rounded-lg mt-4 cursor-pointer"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
