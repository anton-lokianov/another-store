import products from "../assets/products3.png";
import Button from "../components/ui/Button";

const Hero = () => {
  return (
    <div className="flex justify-evenly gap-9 p-24">
      <img
        src={products}
        alt="products"
        className="mix-blend-color-dodge shadow-xl w-[600px] h-[600px] object-fill rounded-2xl"
      />
      <div className="flex text-neutral-300 text-[2.6rem] flex-col mt-5 gap-1 font-mono">
        <p className="">In our Super Shop</p>
        <p className="ml-[9rem]">You Can Find</p>
        <p className="ml-[17rem]">All Kind Of</p>
        <p className="text-[3.2rem] font-extrabold font-serif text-indigo-400 ml-[24rem]">
          Products
        </p>
        <Button text={"start shopping"} className="prime_btn" />
      </div>
    </div>
  );
};

export default Hero;
