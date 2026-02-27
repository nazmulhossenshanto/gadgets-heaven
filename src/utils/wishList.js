import { toast } from "react-toastify";

// get all products from local storage
const getWishListProducts = () => {
  const productStr = localStorage.getItem("wishList");
  if (productStr) {
    return JSON.parse(productStr);
  }
  return [];
};

// add a product to local storage
const addToWishList = (product) => {
  const products = getWishListProducts();
  const exists = products.find(
    (item) => item.product_id === product.product_id,
  );

  if (exists) {
    return toast.error("Already Exists in wishList");
  }
  products.push(product);
  localStorage.setItem("wishList", JSON.stringify(products));
  toast("Product added successfuly");
};

// remove a product from local storage
const removeWishListProduct = (id) => {
  const products = getWishListProducts();
  const remained = products.filter((product) => product.product_id !== id);
  localStorage.setItem("wishList", JSON.stringify(remained));
  toast.success("Successfully Removed from WishList");
};
export { addToWishList, getWishListProducts, removeWishListProduct };
