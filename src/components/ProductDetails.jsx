import React from "react";
import Heading from "./Heading";
import { useLoaderData, useParams } from "react-router";
import { MdStarBorder } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductDetails = () => {
  const allProducts = useLoaderData();
  const params = useParams();
  const id = Number(params.id);
  console.log(allProducts, id);
  const product = allProducts.find((p) => p.product_id === id);
  console.log(product);
  const {
    product_image,
    price,
    product_title,
    rating,
    description,
    specification,
  } = product;
  return (
    <div>
      <div className="relative pb-52 bg-[#9538E2]">
        <Heading
          title="Product Details"
          description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
      </div>
      <div className="absolute top-5  flex justify-center left-1/2  transform -translate-x-[50%] translate-y-[50%]">
        <div className="  ">
          <div className="flex p-5 flex-col  rounded-t-3xl bg-base-200  lg:flex-row gap-10">
            <img
              src={product_image}
              className="w-full  rounded-lg shadow-2xl"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">{product_title}</h1>
              <p className="text-sm">Price: $ {price}</p>
              <p className="text-gray-500">{description}</p>
              <p>
                <span className="font-bold text-xl">Specification :</span>
                {specification.map((sp, idx) => (
                  <ul className="text-gray-500" key={idx}>
                    {idx + 1}. {sp}
                  </ul>
                ))}
              </p>
              <div className="flex items-center">
                <p className="text-xl font-bold">Rating</p>{" "}
                <MdStarBorder size={22} className="text-yellow-400" />
              </div>
              <div className="flex items-center text-2xl ">
                <TiStarFullOutline className="text-yellow-400" />
                <TiStarFullOutline className="text-yellow-400" />
                <TiStarFullOutline className="text-yellow-400" />
                <TiStarFullOutline className="text-yellow-400" />

                <MdStarBorder size={24} className="text-yellow-400" />
                <p className="text-black">{rating}</p>
              </div>
              <div className="flex items-center gap-5">
                <button className="btn bg-[#9538E2] rounded-full p-5 text-white font-bold">
                  Add To Card <MdOutlineShoppingCart size={22} />
                </button>
                <button className="btn btn-circle text-2xl">
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
