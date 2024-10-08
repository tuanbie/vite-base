import mangreen from "../../assets/images/manvset.png";
import mangreenpc from "../../assets/images/mangreenpc.jpg";
import aovest from "../../assets/images/aovest.png";
import GridComponent from "../../compoments/ListProduct";

const Product = () => {
  const data = [
    { id: 1, imgSrc: aovest, text: "aovest PM" },
    { id: 2, imgSrc: aovest, text: "aovest PM" },
    { id: 3, imgSrc: aovest, text: "aovest PM" },
    { id: 4, imgSrc: aovest, text: "aovest PM" },
    { id: 5, imgSrc: aovest, text: "aovest PM" },
    { id: 6, imgSrc: aovest, text: "aovest PM" },
    { id: 7, imgSrc: aovest, text: "aovest PM" },
    { id: 8, imgSrc: aovest, text: "aovest PM" },
  ];
  return (
    <div>
      <hr className=" border-t sticky z-20 sm:top-[89px] top-[55px] border-gray-300 " />
      <div className="flex sm:mt-[89px] top-[56px] mt-[55px] justify-between py-4 px-[3%] sticky sm:top-[89px] bg-white">
        <div>All product</div>
        <button className="bg-white h-8 w-20 border-[1px] border-black text-black rounded-full ">Filter</button>
      </div>
      <div className="">
        <div className="hidden md:flex">
          <img src={mangreenpc} className="mx-auto w-full"></img>
        </div>
        <div className="md:hidden">
          <img src={mangreen} className="mx-auto w-full"></img>
        </div>
      </div>
      <div>
        <GridComponent styleList="hidden sm:grid grid-cols-4 " data={data} />
        <GridComponent styleList="grid grid-cols-2 sm:hidden" data={data} />
      </div>
      <div className="items-center flex justify-center my-11">
        <button className="bg-white h-10 w-28 border-[1px] border-black text-black rounded-full ">Load More</button>
      </div>
    </div>
  );
};

export default Product;
