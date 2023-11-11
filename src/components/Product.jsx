import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const Product = ({ id, name, image, price, amount }) => {
  const disptach = useDispatch();
  return (
    <article className="relative flex flex-col overflow-hidden rounded-lg border p-3">
      <Link to={`${id}`} className="aspect-square ">
        <div className="h-[250px] p-5 overflow-hidden">
          <img className="object-cover" src={image} alt="" />
        </div>

        <div className="absolute top-0 m-2 rounded-full bg-white">
          <p className="rounded-full bg-black p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            Sale
          </p>
        </div>
        <div className="my-4 mx-auto flex w-10/12 h-20 flex-col items-start">
          <div className="mb-2 flex">
            <p className="mr-3 text-sm font-semibold">${price}</p>
            <del className="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 className="mb-2 text-sm text-gray-400 overflow-hidden">{name}</h3>
        </div>
      </Link>

      <button
        onClick={() => disptach(addToCart({ id, name, image, price, amount }))}
        className=" flex items-center justify-center mx-auto w-10/12 rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </button>
    </article>
  );
};

export default Product;
