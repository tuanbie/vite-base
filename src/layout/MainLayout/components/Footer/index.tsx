// import { useState } from "react";

function Footer() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <header className="bg-white text-black bottom-0 ">
      <hr className=" border-t border-gray-300" />

      <div className="grid grid-cols-4 gap-4 py-10 font-sans percent-padding">
        <div>
          <div className="py-3 text-xs">Help</div>
          <ul className="py-3 text-xs font-medium">
            <li>
              You can <a className="underline underline-offset-4">call</a> or{" "}
              <a className="underline underline-offset-4">email us</a>.
            </li>
            <li className="py-3">FAQ's</li>
            <li className="py-3">Product Care</li>
            <li className="py-3">Stores</li>
          </ul>
        </div>
        <div>
          <div className="py-3 text-xs">Services</div>
          <ul className="py-3 text-xs font-medium">
            <li className="py-3">Repairs</li>
            <li className="py-3">Personalization</li>
            <li className="py-3">Air of Gifting</li>
            <li className="py-3">Download</li>
          </ul>
        </div>{" "}
        <div>
          <div className="py-3 text-xs">About Louis Vuitton</div>
          <ul className="py-3 text-xs font-medium">
            <li className="py-3">Fashion Shows</li>

            <li className="py-3">Arts & Culture</li>
            <li className="py-3">La Maison</li>
            <li className="py-3">Sustainability</li>
            <li className="py-3">Latest News</li>
            <li className="py-3">Careers</li>
            <li className="py-3">Foundation Louis Vuitton</li>
          </ul>
        </div>{" "}
        <div>
          <div className="py-3 text-xs">Email Sign-up</div>
          <ul className="py-3 text-xs font-medium">
            <li>
              <a className="underline underline-offset-4">Sign up</a> for Louis Vuitton emails and receive the latest
              news from the Maison, including exclusive online pre-launches and new collections
            </li>
            <li className="py-3">Follow Us</li>
          </ul>
        </div>
      </div>
      <hr className=" border-t border-gray-300" />
      <div className="grid grid-cols-2 justify-between flex-nowrap pt-8 percent-padding">
        <ul className="py-3 text-xs font-medium text-start">
          <li>ENGLISH (INTL)</li>
        </ul>
        <ul className="py-3 text-xs font-medium flex justify-self-end">
          <li className="py-3">Sitemap</li>
          <li className="py-3 mx-8">Legal & privacy</li>
          <li className="py-3">Cookies</li>
        </ul>
      </div>
      <p className=" Georgia justify-center text-center font-normal text-3xl px-6 py-9">27 JAN</p>
    </header>
  );
}

export default Footer;
