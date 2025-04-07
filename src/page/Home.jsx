import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <section className="w-full bg-gray-100 px-6 sm:px-12 lg:px-20 py-10 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-gray-500 text-sm">International Brands</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">2,000+</p>
              <p className="text-gray-500 text-sm">High-Quality Products</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">30,000+</p>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 hidden lg:flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1636831990771-c70381797936?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhzfGVufDB8MnwwfHx8MA%3D%3D" // Replace with actual image URL
            alt="Fashion Models"
            className="w-full max-w-lg object-cover"
          />
        </div>
      </section>
      <Products />
    </>
  );
};

export default Home;
