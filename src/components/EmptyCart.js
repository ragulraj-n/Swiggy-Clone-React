import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="w-full items-center flex flex-col h-[80vh] justify-center">
          
      <h1 className="font-bold flex">Cart Is Empty</h1>
      <p>You can go to home page to view more restaurants</p>
      <Link  className="w-[10%] h-[9%] mt-2.5" to="/order">
      <button className="bg-[orangered] font-semibold w-full cursor-pointer rounded-sm text-white">Order Now</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
