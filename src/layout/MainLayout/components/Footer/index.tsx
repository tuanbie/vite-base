// import { useState } from "react";

import { useState } from "react";
import Dropdown from "../../../../compoments/DropDown/dropdown";

function Footer() {
  const [isOpen, setIsMenuOpen] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setIsMenuOpen(isOpen === id ? null : id);
  };

  return (
    <footer className="bg-white text-black bottom-0 ">
      <hr className=" border-t border-gray-300" />

      <div className=" hidden md:grid grid-cols-4 gap-4 py-10 font-sans percent-padding">
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
      <div className="hidden md:grid  grid-cols-2 justify-between flex-nowrap pt-8 percent-padding">
        <ul className="py-3 text-xs font-medium text-start">
          <li>ENGLISH (INTL)</li>
        </ul>
        <ul className="py-3 text-xs font-medium flex justify-self-end">
          <li className="py-3">Sitemap</li>
          <li className="py-3 mx-8">Legal & privacy</li>
          <li className="py-3">Cookies</li>
        </ul>
      </div>
      <p className="hidden md:grid Georgia justify-center text-center font-normal text-3xl px-6 py-8">27 JAN</p>
      <div className="md:hidden">
        <p className=" Georgia justify-center text-center font-normal text-3xl px-6 py-8">27 JAN</p>
        <div className="percent-mobile-padding ">
          <hr className=" border-t border-gray-300" />
          <Dropdown
            id="dropdown1"
            title="Help"
            isOpen={isOpen === "dropdown1"}
            onClick={toggleDropdown}
            items={
              <>
                <li className="pb-6">
                  You can <a className="underline underline-offset-4">call</a> or{" "}
                  <a className="underline underline-offset-4">email us</a>.
                </li>
                <li className="py-3 pb-6">FAQ's</li>
                <li className="py-3 pb-6">Product Care</li>
                <li className="py-3">Stores</li>
              </>
            }
          />
          <hr className=" border-t border-gray-300" />
          <Dropdown
            id="dropdown2"
            title="Services"
            isOpen={isOpen === "dropdown2"}
            onClick={toggleDropdown}
            items={
              <>
                <li className="py-3">Repairs</li>
                <li className="py-3">Personalization</li>
                <li className="py-3">Air of Gifting</li>
                <li className="py-3">Download</li>
              </>
            }
          />
          <hr className=" border-t border-gray-300" />
          <Dropdown
            id="dropdown3"
            title="About Louis Vuitton"
            isOpen={isOpen === "dropdown3"}
            onClick={toggleDropdown}
            items={
              <>
                <li className="py-3">Fashion Shows</li>
                <li className="py-3">Arts & Culture</li>
                <li className="py-3">La Maison</li>
                <li className="py-3">Sustainability</li>
                <li className="py-3">Latest News</li>
                <li className="py-3">Careers</li>
                <li className="py-3">Foundation Louis Vuitton</li>
              </>
            }
          />
          <hr className=" border-t border-gray-300" />
          <Dropdown
            id="dropdown4"
            title="Email Sign-up"
            isOpen={isOpen === "dropdown4"}
            onClick={toggleDropdown}
            items={
              <>
                <li>
                  <a className="underline underline-offset-4">Sign up</a> for Louis Vuitton emails and receive the
                  latest news from the Maison, including exclusive online pre-launches and new collections
                </li>
                <li className="py-3">Follow Us</li>
              </>
            }
          />
        </div>
        <hr className=" border-t border-gray-300" />
        <div className="text-center pt-10">
          <a>Sitemap</a>
          <a className="px-4">Legal & privacy</a>
          <a>Services</a>
        </div>
        <div className="text-center pt-6 pb-10 underline underline-offset-4">ENGLISH (INTL)</div>
      </div>
    </footer>
  );
}

export default Footer;
