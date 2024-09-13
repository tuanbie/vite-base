// import React from "react";
import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa";
import aovest from "../../assets/images/aovest.png";
import GridComponent from "../../compoments/ListProduct";
import { PiGreaterThanBold } from "react-icons/pi";
import BottomComponent from "../../compoments/Button";
import Carousel from "../../compoments/ImagePair/ImagePair";

export const ProductDetail = () => {
  interface ImageData {
    id: number;
    imgSrc: string;
  }
  const data: ImageData[] = [
    { id: 1, imgSrc: aovest },
    { id: 2, imgSrc: aovest },
    { id: 3, imgSrc: aovest },
    { id: 4, imgSrc: aovest },
  ];
  return (
    <div className="">
      <div className="hidden lg:flex mt-[85px]">
        <div className="flex-1">
          <GridComponent styleList="" data={data} />
        </div>
        <div className="flex-1">
          <div className="p-[28%] lg:mt-[5%]">
            <div className="flex justify-between ">
              <p>1AFW72</p>
              <CiHeart />
            </div>
            {/* <FaHeart className="hidden" /> */}
            <div className="pt-[4px]">product</div>
            <div className="flex justify-between my-8">
              <p>Sizes</p>
              <div className="flex">
                <p>50</p>
                <PiGreaterThanBold />
              </div>
            </div>
            <div className="my-6">
              <BottomComponent style="bg-black w-full py-[14px] text-white rounded-full mt-4">
                Call for inquiry
              </BottomComponent>
            </div>
            <div className="pt-[4px]">Check availability in store</div>
            <div className="pt-[4px]">Product details</div>
            <div className="pt-[4px]">Gifting</div>
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-[85px] ">
        <Carousel images={data} />
        <div className="flex-1">
          <div className="p-[15%]">
            <div className="flex justify-between ">
              <p>1AFW72</p>
              <CiHeart />
            </div>
            {/* <FaHeart className="hidden" /> */}
            <div className="pt-[4px]">product</div>
            <div className="flex justify-between my-8">
              <p>Sizes</p>
              <div className="flex">
                <p>50</p>
                <PiGreaterThanBold />
              </div>
            </div>
            <div className="my-6">
              <BottomComponent style="bg-black w-full py-[14px] text-white rounded-full mt-4">
                Call for inquiry
              </BottomComponent>
            </div>
            <div className="pt-[4px]">Check availability in store</div>
            <div className="pt-[4px]">Product details</div>
            <div className="pt-[4px]">Gifting</div>
          </div>
        </div>
      </div>
    </div>
  );
};
