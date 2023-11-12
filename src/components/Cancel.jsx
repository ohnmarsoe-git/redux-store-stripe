import React from "react";

const Cancel = () => {
  return (
    <section className="bg-white mx-auto max-w-screen-xl py-12 text-gray-700 text-center sm:py-16 lg:py-20">
      <h2 className="text-2xl mb-7 font-bold tracking-tight text-gray-900 sm:text-6xl">
        Cancel
      </h2>
      <p className="m-7 text-base font-medium">
        Sorry to see you cancel with stripe paymeent
      </p>
      <a
        href="/"
        className="inline-flex items-center rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Shopping Again
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </section>
  );
};

export default Cancel;
