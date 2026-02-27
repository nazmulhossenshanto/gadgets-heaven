import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { addToCart, getCartProduct, removeCartProduct } from "../utils/cart";
import { getWishListProducts, removeWishListProduct } from "../utils/wishList";
import { RxCrossCircled } from "react-icons/rx";
import { FaSlidersH } from "react-icons/fa";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [cartProducts, setCartProducts] = useState([]);
  const [wishListProducts, setWishListProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setCartProducts(getCartProduct());
    setWishListProducts(getWishListProducts());
  }, []);
  const handleRemove = (id) => {
    if (activeTab === "cart") {
      removeCartProduct(id);
      setCartProducts(getCartProduct());
    } else {
      removeWishListProduct(id);
      setWishListProducts(getWishListProducts());
    }
  };
  const productsToShow = activeTab === "cart" ? cartProducts : wishListProducts;
  const totalCost = cartProducts.reduce(
    (sum, product) => sum + product.price,
    0,
  );
  const handleSort = () => {
    const sorted = [...cartProducts].sort((a, b) => a.price - b.price);

    setCartProducts(sorted);
    setIsSorted(true);
  };

  return (
    <div>
      <section>
        <div className="bg-[#9538E2] text-white flex flex-col items-center mt-3 py-8 space-y-5">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="w-2/4 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          {/* Tabs */}
          <div className="flex gap-5 mb-8">
            <button
              onClick={() => setActiveTab("cart")}
              className={`btn btn-outline rounded-full px-6 ${
                activeTab === "cart"
                  ? "bg-white font-bold text-xl text-[#9538E2]"
                  : ""
              }`}
            >
              Cart
            </button>

            <button
              onClick={() => setActiveTab("wishlist")}
              className={`btn btn-outline rounded-full ${
                activeTab === "wishlist"
                  ? "bg-white font-bold text-xl text-[#9538E2]"
                  : ""
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </section>
      <section>
        {activeTab === "cart" && (
          <div className="flex justify-between items-center my-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex justify-center items-center gap-5">
              <h2 className="text-xl font-bold">Total cost : {totalCost}</h2>
              <button
                onClick={handleSort}
                className="text-[#9538E2] border-[#9538E2] btn rounded-4xl font-bold "
              >
                Sort by Price <FaSlidersH className="rotate-90" />
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="btn  bg-[#9538E2] text-white  px-5 rounded-4xl"
              >
                Purchase
              </button>
            </div>
          </div>
        )}
      </section>
      <section>
        {productsToShow.length === 0 ? (
          <p>No Products Found</p>
        ) : (
          productsToShow.map((product) => (
            <div
              key={product.product_id}
              className="shadow-lg p-4 mt-10 mb-4 rounded-lg flex justify-between "
            >
              <div className="flex justify-center  gap-5">
                <div>
                  <img src={product.product_image} alt="" />
                </div>
                <div className="mt-8">
                  <h1 className="text-xl font-bold">{product.product_title}</h1>
                  <p className="text-gray-500">
                    <span className="text-xl font-bold text-black">
                      Description :{" "}
                    </span>
                    {product.description}
                  </p>
                  <p className="text-gray-500">Price: ${product.price}</p>
                  {activeTab === "wishlist" && (
                    <button
                      onClick={() => {
                        addToCart(product);
                        setCartProducts(getCartProduct());
                      }}
                      className="btn bg-[#9538E2] rounded-full p-5 mt-3 text-white font-bold"
                    >
                      Add To Card
                    </button>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleRemove(product.product_id)}
                className=" text-white"
              >
                <RxCrossCircled size={40} className="text-red-500" />
              </button>
            </div>
          ))
        )}
        {showModal && (
          <div className="fixed shadow-3xl inset-0 flex items-center justify-center  bg-opacity-40 z-50">
            {/* Modal Box */}
            <div className="bg-white w-96 p-6 rounded-xl shadow-lg text-center relative">
              <h2 className="text-2xl font-bold mb-4">Payment Successfully</h2>

              <p className="text-gray-600 mb-2">
                Thanks for purchasing.
              </p>
              <p className="text-gray-600 mb-6">
                Total: {totalCost}
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-wide bg-gray-300 rounded-4xl px-6"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
