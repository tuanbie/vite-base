import React from "react";

interface ListProduct {
  data: any[];
}
interface ItemProduct {
  imgSrc: string;
  text: string;
}

const GridItem: React.FC<ItemProduct> = ({ imgSrc, text }) => (
  <div className="bg-gradient-to-tr from-white to-slate-100">
    <img src={imgSrc} alt="description" />
    <p className="text-left p-4 font-normal text-sm">{text}</p>
  </div>
);

const GridComponent: React.FC<ListProduct> = ({ data }) => (
  <div className="hidden sm:grid grid-cols-4 h-[15%]">
    {data.map((item: any) => (
      <GridItem key={item.id} imgSrc={item.imgSrc} text={item.text} />
    ))}
  </div>
);

export default GridComponent;
