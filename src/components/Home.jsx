import CTA from "./CTA";
import Coursel from "./Coursel";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import SlickSlider from "./SlickSlider";

const Home = () => {
  return (
    <>
      <Coursel />
      <div className="px-3">
        <CTA />
        <SlickSlider />
        <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                New Arrivals
              </h2>
            </div>
            <Products />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
