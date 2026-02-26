import React from "react";
import banner from "../assets/banner.jpg";
import Products from "../components/Products";
import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData();
    console.log(data);
  return (
    <div>
      <header>
        <div className="bg-[#9538E2] flex flex-col items-center relative py-5 mt-3 space-y-5 pb-68">
          <h1 className="text-4xl text-white font-bold text-center ">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-center text-white">
            {" "}
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to
            <br />
            the coolest accessories, we have it all!
          </p>
          <button className="btn bg-white rounded-full text-[#9538E2] font-bold">
            Shop Now
          </button>
        </div>
        <div className="absolute w-3/4 top-20 flex justify-center left-1/2  transform -translate-x-[50%] translate-y-[50%] ">
          <img
            className=" h-120 w-auto rounded-2xl border-10 border-white/25"
            src={banner}
            alt=""
          />
        </div>
      </header>
      <main className="mt-70 my-12">
        <section>
            <h1 className='text-3xl font-bold text-center my-10'>Explore Cutting-Edge Gadgets</h1>
            <Products data={data}></Products>
        </section>
      </main>
    </div>
  );
};

export default Home;
