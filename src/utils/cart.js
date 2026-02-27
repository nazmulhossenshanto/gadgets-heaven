import { toast } from "react-toastify";

// get all products from local storage
const getCartProduct = () => {
  const productStr = localStorage.getItem("cart");
  if (productStr) {
    return JSON.parse(productStr);
  }
  return [];
};


// add a product to local storage
const addToCart = (product) => {
  const products = getCartProduct();
  const exists = products.find(
    item => item.product_id === product.product_id
  );

  if (exists) {
    return toast.error("Already Exists in Cart");
  }
  products.push(product);
    localStorage.setItem('cart', JSON.stringify(products))
    toast('Product added successfuly')
};

// remove a product from local storage
const removeCartProduct = (id)=>{
  const products = getCartProduct();
  const remained = products.filter(
    product => product.product_id !== id
  );
  localStorage.setItem('cart', JSON.stringify(remained));
  toast.success('Successfully Removed')
}
export { addToCart, getCartProduct , removeCartProduct};
