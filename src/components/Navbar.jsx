import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);

  return (
    <div className="flex flex-row justify-evenly mt-2 py-4">
      <p>Home</p>
      <p>
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-3 py-2 mx-1">
          {amount}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
