import React from "react";

interface ListProduct {
  data: any[];
  styleList: string;
}
interface ItemProduct {
  imgSrc: string;
  text: string;
}

const GridItem: React.FC<ItemProduct> = ({ imgSrc, text }) => (
  <a className="bg-gradient-to-tr from-white to-slate-100" href="/productDetail">
    <img src={imgSrc} alt="description" />
    <p className="text-left p-4 font-normal text-sm">{text}</p>
  </a>
);

const GridComponent: React.FC<ListProduct> = ({ data, styleList }) => (
  <div className={`${styleList}`}>
    {data.map((item: any) => (
      <GridItem key={item.id} imgSrc={item.imgSrc} text={item.text} />
    ))}
  </div>
);

export default GridComponent;
