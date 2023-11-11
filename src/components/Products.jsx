import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";

const Products = () => {
  const { products } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="m-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
      {products.map((item, index) => (
        <Product
          key={item.id}
          id={item.id}
          name={item.title}
          image={item.image}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default Products;
