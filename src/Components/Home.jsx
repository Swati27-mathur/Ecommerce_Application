import React from "react";
import Carousel from "./Carousel";
import tredimage1 from "../assets/image/tranding/bracelet.jpg";
import tredimage2 from "../assets/image/tranding/earrings-05.jpg";
import tredingimage3 from "../assets/image/tranding/earrings-06.jpg";
import tredingimage4 from "../assets/image/tranding/earrings.jpg";
import uniquepiece1 from "../assets/image/tranding/bg-02.jpg";
import uniquepiece2 from "../assets/image/tranding/bg-01.jpg";
import discount from "../assets/image/services/discount.png";
import shipping from "../assets/image/services/free shipping.png";
import tracking from "../assets/image/services/order tracking.png";
import payment from "../assets/image/services/secure payment.png";

const Home = () => {
  return (
    <>
      <div>
      <div className=" home-background">
        <h6 className="background-content">The new ring sensation</h6>
      </div>
      {/* Carousel Section */}
      <div className="mt-6 mb-12 ">
        <Carousel />
      </div>
      {/* popular products Section */}
      <div className="mt-[80px] grid justify-center ">
        <p className="text-gray-500">Popular Products</p>
      </div>
      <div className="mt-[2px] grid justify-center mb-[50px]">
        <h6 className="text-4xl uppercase">Trending Now</h6>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <img
            src={tredimage1}
            alt="trending image"
            className=" w-[300px] h-[350px] "
          />
          <h6 className="text-2xl mt-4 ml-8 ">Product Name 1</h6>
          <p className="text-bold ml-8">450</p>
        </div>
        <div>
          <img
            src={tredimage2}
            alt="trending image"
            className=" w-[300px] h-[350px] "
          />
          <h6 className="text-2xl mt-4 ml-8 ">Product Name 1</h6>
          <p className="text-bold ml-8">450</p>
        </div>
        <div>
          <img
            src={tredingimage3}
            alt="trending image"
            className=" w-[300px] h-[350px] "
          />
          <h6 className="text-2xl mt-4 ml-8 ">Product Name 1</h6>
          <p className="text-bold ml-8">450</p>
        </div>
        <div>
          <img
            src={tredingimage4}
            alt="trending image"
            className=" w-[300px] h-[350px] "
          />
          <h6 className="text-2xl mt-4 ml-8 ">Product Name 1</h6>
          <p className="text-bold ml-8">450</p>
        </div>
      </div>
      {/* unique pieces Section */}
      <div className="grid grid-cols-3 gap-4 mt-20">
        <div className="justify-center mt-20">
          <h1 className=" text-black">Unique pieces</h1>
          <div className=" block w-12">
            {" "}
            <h6 className="text-[70px] whitespace-pre-line">
              Be always on trend
            </h6>
          </div>
        </div>
        <div class="relative justify-self-end col-span-2 ">
          <img
            src={uniquepiece1}
            alt="Image 1"
            class="absolute w-[400px] object-cover mr-[180px] h-[550px] right-1/2  top-28 "
          />

          <img src={uniquepiece2} alt="Image 2" class=" static" />
        </div>
      </div>
      {/* best in business Section */}
      <div className=" mt-28">
        <p className=" text-gray-500 grid justify-center font-bold">
          best in business
        </p>
        <h1 className=" text-[50px] grid justify-center">Why choose us</h1>
        <p className=" text-gray-500 justify-self-center w-[621px] text-center font-serif text-2xl uppercase">
          Cras malesuada dolor sit amet est egestas ullamcorper. Nullam in
          tortor mi. Maecenas vulputate libero
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-20">
        <div>
          <img src={discount} className="" />
          <h1 className=" text-xl font-serif uppercase">Big Discounts</h1>
          <p className=" text-gray-400 text-justify">
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra,cursus justo.
          </p>
        </div>
        <div>
          <img src={shipping} className="" />
          <h1 className=" text-xl font-serif uppercase">Free Shipping</h1>
        </div>
        <div>
          <img src={payment} className="" />
          <h1 className=" text-xl font-serif uppercase">Secure Payments</h1>
        </div>
        <div>
          <img src={tracking} className="" />
          <h1 className=" text-xl font-serif uppercase">Order Tracking</h1>
        </div>
      </div>
    </div>

    </>
  );
};

export default Home;
