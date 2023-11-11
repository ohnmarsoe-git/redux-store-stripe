import { useSelector } from "react-redux";
import Product from "./Product";

const CartProducts = () => {
  const { products, total } = useSelector((store) => store.cart);

  return (
    <div className="py-4">
      <div>
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
      <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        <p className="text-2xl font-medium">
          $ {total > 0 ? total.toFixed(2) : 0}
        </p>
      </div>
    </div>
  );
};

export default CartProducts;
