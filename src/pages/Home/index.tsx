import CustomVideoPlayer from "../../compoments/Player/Player";

import "./style.css";
import exampleVideo from "../../assets/video/demo.mp4";
import manrun from "../../assets/video/manrun.mp4";
import manrunmobile from "../../assets/video/manrunmobile.mp4";
import mobile from "../../assets/video/mobile.mp4";
import handbag from "../../assets/images/handbag.png";
import jewelry from "../../assets/images/jewelry.png";
import manbag from "../../assets/images/manbag.png";
import manshoes from "../../assets/images/manshoes.png";
import perfumes from "../../assets/images/perfumes.png";
import shoes from "../../assets/images/shoes.png";
import sunglass from "../../assets/images/sunglass.png";
import wallet from "../../assets/images/wallet.png";
import womenbag from "../../assets/images/womanbag.png";
import womenbagpc from "../../assets/images/womenbagpc.png";
import camerabox from "../../assets/images/camerabox.png";
import cargo from "../../assets/images/cargo.png";
import dark from "../../assets/images/dark.png";
import montsouris from "../../assets/images/montsouris.png";
import love from "../../assets/images/love.png";
import llmmen from "../../assets/images/llmmen.png";
import imagination from "../../assets/images/imagination.png";
import travel from "../../assets/images/travel.png";
import service from "../../assets/images/service.png";
import gift from "../../assets/images/gift.png";
import personal from "../../assets/images/personal.png";

function Home() {
  return (
    <div className="relative sm:mt-20  mt-14">
      <hr className=" border-t sticky z-20 sm:top-[89px] top-[54px]  border-gray-300" />

      <div className="hidden md:flex">
        <CustomVideoPlayer src={exampleVideo} autoPlay={true} muted={true} />
      </div>
      <div className="md:hidden">
        <CustomVideoPlayer src={mobile} autoPlay={true} muted={true} />
      </div>
      <div className=" justify-center text-center py-24 hidden md:flex">
        <p className="system-ui font-normal text-2xl px-6">Explore a Selection of the Maison's Creations</p>
      </div>
      <div className="flex justify-center text-center py-14 md:hidden ">
        <p className="system-ui font-normal text-2xl px-6">Explore a Selection of the Maison's Creations</p>
      </div>
      <div className="hidden md:grid grid-cols-4 gap-4  percent-padding">
        <div>
          <img src={handbag}></img>
          <p className="text-center mt-6 px-2">Women's Handbags</p>
        </div>
        <div>
          <img src={wallet}></img>
          <p className="text-center mt-6 px-2">Women's Wallets And Small Leather Goods</p>
        </div>
        <div>
          <img src={jewelry}></img>
          <p className="text-center mt-6 px-2">Women's Fashion Jewelry</p>
        </div>
        <div>
          <img src={shoes}></img>
          <p className="text-center mt-6 px-2">Women's Shoes</p>
        </div>
        <div>
          <img src={manbag}></img>
          <p className="text-center mt-6 px-2">Man's Bags</p>
        </div>
        <div>
          <img src={sunglass}></img>
          <p className="text-center mt-6 px-2">Women's Sunglass</p>
        </div>
        <div>
          <img src={perfumes}></img>
          <p className="text-center mt-6 px-2">Perfumes</p>
        </div>
        <div>
          <img src={manshoes}></img>
          <p className="text-center mt-6 px-2">Women's Shoes</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 px-8 md:hidden percent-mobile-padding">
        <div>
          <img src={handbag}></img>
          <p className="text-center mt-6 px-2">Women's Handbags</p>
        </div>
        <div>
          <img src={wallet}></img>
          <p className="text-center mt-6 px-2">Women's Wallets And Small Leather Goods</p>
        </div>
        <div>
          <img src={jewelry}></img>
          <p className="text-center mt-6 px-2">Women's Fashion Jewelry</p>
        </div>
        <div>
          <img src={shoes}></img>
          <p className="text-center mt-6 px-2">Women's Shoes</p>
        </div>
        <div>
          <img src={manbag}></img>
          <p className="text-center mt-6 px-2">Man's Bags</p>
        </div>
        <div>
          <img src={sunglass}></img>
          <p className="text-center mt-6 px-2">Women's Sunglass</p>
        </div>
        <div>
          <img src={perfumes}></img>
          <p className="text-center mt-6 px-2">Perfumes</p>
        </div>
        <div>
          <img src={manshoes}></img>
          <p className="text-center mt-6 px-2">Women's Shoes</p>
        </div>
      </div>

      <div className=" justify-center text-center py-24">
        <p className="Georgia font-normal text-xs px-6 py-1">Women</p>
        <p className="Georgia font-normal text-3xl px-6 py-4">Handbags</p>
        <p className="Georgia font-normal text-sm px-6 py-1 underline underline-offset-4">Discover the Selection</p>
      </div>

      <div className="-z-10 top-20 sticky">
        <div className="hidden md:flex">
          <img src={womenbagpc} className="mx-auto w-full"></img>
        </div>
        <div className="md:hidden">
          <img src={womenbag} className="mx-auto w-full"></img>
        </div>
      </div>

      <div className="bg-white pt-12">
        <div className="hidden md:grid grid-cols-4 gap-5 percent-padding">
          <div>
            <img src={montsouris}></img>
            <p className="text-left mt-6 font-normal text-sm">Montsouris PM</p>
          </div>
          <div>
            <img src={camerabox}></img>
            <p className="text-left mt-6 font-normal text-sm">Camera Box</p>
          </div>
          <div>
            <img src={cargo}></img>
            <p className="text-left mt-6 font-normal text-sm">CarryAll Cargo PM</p>
          </div>
          <div>
            <img src={dark}></img>
            <p className="text-left mt-6 font-normal text-sm">CarryAll Dark MM</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 px- md:hidden percent-mobile-padding">
          <div>
            <img src={montsouris}></img>
            <p className="text-left mt-6 font-normal text-sm">Montsouris PM</p>
          </div>
          <div>
            <img src={camerabox}></img>
            <p className="text-left mt-6 font-normal text-sm">Camera Box</p>
          </div>
          <div>
            <img src={cargo}></img>
            <p className="text-left mt-6 font-normal text-sm">CarryAll Cargo PM</p>
          </div>
          <div>
            <img src={dark}></img>
            <p className="text-left mt-6 font-normal text-sm">CarryAll Dark MM</p>
          </div>
        </div>
      </div>
      <div className=" justify-center text-center py-24 bg-white">
        <p className="Georgia font-normal text-xs px-6 py-1">Perfumers</p>
        <p className="Georgia font-normal text-3xl px-6 py-4">27 Lovers</p>
        <p className="Georgia font-normal text-sm px-6 py-1 underline underline-offset-4">Discover the New Perfume</p>
      </div>
      <div className="-z-10 top-20 sticky">
        <div className="hidden md:flex">
          <CustomVideoPlayer src={manrun} autoPlay={true} muted={true} />
        </div>
        <div className="md:hidden">
          <CustomVideoPlayer src={manrunmobile} autoPlay={true} muted={true} />
        </div>
      </div>

      <div className="pt-12 bg-white">
        <div className="hidden md:grid grid-cols-4 gap-5 percent-padding">
          <div>
            <img src={love}></img>
            <p className="text-left mt-6 font-normal text-sm">LV Lovers</p>
          </div>
          <div>
            <img src={travel}></img>
            <p className="text-left mt-6 font-normal text-sm">Damoflage 100ml Travel Case</p>
          </div>
          <div>
            <img src={imagination}></img>
            <p className="text-left mt-6 font-normal text-sm">Imagination</p>
          </div>
          <div>
            <img src={llmmen}></img>
            <p className="text-left mt-6 font-normal text-sm">L'Immensité</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3  md:hidden percent-mobile-padding">
          <div>
            <img src={love}></img>
            <p className="text-left mt-6 font-normal text-sm">LV Lovers</p>
          </div>
          <div>
            <img src={travel}></img>
            <p className="text-left mt-6 font-normal text-sm">Damoflage 100ml Travel Case</p>
          </div>
          <div>
            <img src={imagination}></img>
            <p className="text-left mt-6 font-normal text-sm">Imagination</p>
          </div>
          <div>
            <img src={llmmen}></img>
            <p className="text-left mt-6 font-normal text-sm">L'Immensité</p>
          </div>
        </div>
      </div>

      <div className=" justify-center text-center py-24 bg-white">
        <p className="Georgia font-normal text-3xl px-6 py-4">27 Jan Services</p>
        <p className="Georgia font-normal text-sm px-6 py-1 text-center">
          Louis Vuitton offers complementary wrapping on all orders, carefully packaged in the Maison's iconic boxes.
        </p>
      </div>

      <div className="pb-24 bg-white">
        <div className="hidden md:grid grid-cols-3 gap-3 percent-padding justify-between">
          <div>
            <img src={service}></img>
            <p className="text-center mt-6 font-normal  text-sm">Services</p>
            <p className="text-center mt-6 font-normal  text-sm underline underline-offset-4">Contact Us</p>
          </div>
          <div>
            <img src={gift}></img>
            <p className="text-center mt-6 font-normal text-sm">Art of Gifting</p>
            <div className="grid grid-cols-2 gap-3  justify-center">
              <p className="text-end mt-6 font-normal  text-sm underline underline-offset-4">Gifts for Women</p>
              <p className="text-start mt-6 font-normal  text-sm underline underline-offset-4">Gifts for Men</p>
            </div>
          </div>
          <div>
            <img src={personal}></img>
            <p className="text-center mt-6 font-normal  text-sm">Personalization</p>
            <p className="text-center mt-6 font-normal text-sm underline underline-offset-4">Explore</p>
          </div>
        </div>

        <div className=" md:hidden grid-cols-3 gap-3 flex flex-nowrap percent-mobile-padding ">
          <div>
            <img src={service}></img>
            <p className="text-center mt-6 font-normal  text-sm">Services</p>
            <p className="text-center mt-6 font-normal  text-sm underline underline-offset-4">Contact Us</p>
          </div>
          <div>
            <img src={gift}></img>
            <p className="text-center mt-6 font-normal text-sm">Art of Gifting</p>
            <div className="grid grid-cols-2 gap-3  justify-center">
              <p className="text-end mt-6 font-normal  text-sm underline underline-offset-4">Gifts for Women</p>
              <p className="text-start mt-6 font-normal  text-sm underline underline-offset-4">Gifts for Men</p>
            </div>
          </div>
          <div>
            <img src={personal}></img>
            <p className="text-center mt-6 font-normal  text-sm">Personalization</p>
            <p className="text-center mt-6 font-normal text-sm underline underline-offset-4">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
