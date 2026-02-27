import { toast } from "react-toastify";

// get all coffees from local storage
const getProduct = () => {
  const productStr = localStorage.getItem("product");
  if (productStr) {
    return JSON.parse(productStr);
  }
  return [];
};

// add a coffee to local storage
const addToLS = (product) => {
  const products = getProduct();
  const exists = products.find(item=>item.id === product.id);
  if(exists) return toast('Already Exist');
  products.push(product);
    localStorage.setItem('product', JSON.stringify(products))
    toast('Coffee added successfuly')
};

// remove a coffee from local storage
const removeProduct = (id)=>{
  const products = getProduct();
  const remained = products.filter(product=>product.id != id);
  localStorage.setItem('product', JSON.stringify(remained));
  toast.success('Successfully Removed')
}
export { addToLS, getProduct , removeProduct};
