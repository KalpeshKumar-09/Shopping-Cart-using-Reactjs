import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getResults = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    };

    getResults();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <img
          src={product.images}
          alt={product.title}
          className="h-64 mx-auto mt-4"
        />

        <p className="text-gray-700 mt-4">{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>
        <Link to="/" className="mt-4 inline-block text-blue-500 underline">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default Product;
