import React from "react";
import { Link } from "react-router";

const ProdcutCard = ({ product }) => {
  const { product_title, product_image, price } = product;
  return (
    <div>
      <div className="card bg-base-100  h-80 flex flex-col  shadow-xl hover:scale-105">
        <figure>
          <img className="flex-1 p-5  " src={product_image} alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>
            Price:
            {price}k
          </p>
          <div className="card-actions justify-start">
            <Link className="btn btn-outline text-[#9538E2] border-[#9538E2] rounded-full">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdcutCard;
