import { IoIosHeart } from "react-icons/io";
import { BsCartPlusFill } from "react-icons/bs";
const ImageCard = ({ title, img, name, price }) => {
  return (
    <div className="card w-full">
      <div className="w-full h-[250px]  border-2 border-sky-100w-full rounded overflow-hidden">
        <img
          src={img}
          alt="asets"
          className="w-full h-full rounded object-cover transition-all ease-linear hover:scale-105 transform cursor-pointe duration-300"
        />
      </div>
      <p className="font-semibold text-white bg-black w-fit px-5 py-1 text-sm rounded-full mt-3 cursor-pointer">
        {"@" + name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
      <div className="flex items-center justify-between">
        <div className="w-80">
          <h3 className="text-xl font-bold w-fit">{title}</h3>
          <p className="font-semibold text-sm text-slate-500 text-wrap">{"$" + price}</p>
        </div>
        <div className="flex items-center gap-3 text-2xl ">
          <IoIosHeart className="text-red-600" />
          <BsCartPlusFill />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
