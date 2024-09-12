import React from "react";
import mangreen from "../../assets/images/manvset.png";
import aovest from "../../assets/images/aovest.png";

const product = () => {
  return (
    <div>
      <div className="flex sm:mt-[89px] mt-[55px] justify-between py-4 px-[3%] sticky top-[89px] bg-white">
        <div>All product</div>
        <button className="bg-white h-8 w-20 border-[1px] border-black text-black rounded-full ">Filter</button>
      </div>
      <img className="top-0 w-full" src={mangreen}></img>
      <div className="hidden sm:grid grid-cols-4 h-[15%]">
        <div className="bg-gradient-to-tl from-slate-200 to-slate-300">
          <img className="z-50" src={aovest}></img>
          <p className="text-left p-4 font-normal text-sm ">aovest PM</p>
        </div>
        <div className="bg-gradient-to-tl from-slate-200 to-slate-300">
          <img src={aovest}></img>
          <p className="text-left p-4 font-normal text-sm">aovest PM</p>
        </div>
        <div className="bg-gradient-to-tl from-slate-200 to-slate-300">
          <img src={aovest}></img>
          <p className="text-left p-4 font-normal text-sm">aovest PM</p>
        </div>
        <div className="bg-gradient-to-tl from-slate-200 to-slate-300">
          <img src={aovest}></img>
          <p className="text-left p-4 font-normal text-sm">aovest PM</p>
        </div>
        <div className="bg-gradient-to-tl from-slate-200 to-slate-300">
          <img src={aovest}></img>
          <p className="text-left p-4 gap-0 font-normal text-sm">aovest PM</p>
        </div>
        <div className="bg-gradient-to-tl from-slate-200 to-slate-300">
          <img src={aovest}></img>
          <p className="text-left p-4 font-normal text-sm">aovest PM</p>
        </div>
        <div className="bg-gradient-to-tl from-slate-200 to-slate-300">
          <img src={aovest}></img>
          <p className="text-left p-4 font-normal text-sm">aovest PM</p>
        </div>
        <div className="bg-gradient-to-tl from-slate-200 to-slate-300">
          <img src={aovest}></img>
          <p className="text-left p-4 font-normal text-sm">aovest PM</p>
        </div>
      </div>
      <div className="grid grid-cols-2  "></div>
      <div className="items-center flex justify-center my-11">
        <button className="bg-white h-10 w-28 border-[1px] border-black text-black rounded-full ">Load More</button>
      </div>
    </div>
  );
};

export default product;
