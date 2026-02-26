import React, { useState } from "react";
import ProdcutCard from "./ProdcutCard";

const Products = ({ data }) => {
  const allProducts = data;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase(),
        );
  return (
    <div className="flex gap-5">
      {/* left aside */}
      <section className="w-1/4">

        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`btn w-full mb-2 ${
              selectedCategory === category
                ? "bg-[#9538E2] text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </section>
      {/* right aside */}
      <section className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.map((product) => (
          <ProdcutCard key={product.id} product={product}></ProdcutCard>
        ))}
      </section>
    </div>
  );
};

export default Products;
