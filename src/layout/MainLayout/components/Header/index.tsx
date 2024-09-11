import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../../../../compoments/icon/icon";
import { Drawer } from "antd";
import Dropdown from "../../../../compoments/DropDown/dropdown";
import SearchComponent from "../../../../compoments/Input";

function Header() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsMenuOpen] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const showSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const toggleDropdown = (id: string) => {
    setIsMenuOpen(isOpen === id ? null : id);
  };
  return (
    <header className="fixed top-0 left-0 w-full text-white  z-50 shadow-md">
      <div className="bg-white text-black  items-center justify-between  flex-1 relative grid grid-cols-3  h-24">
        <div className="pl-9">
          <div>
            <ButtonCustom className="absolute" onClick={showDrawer} value="left">
              <svg width={24} height={24} viewBox="0 0 0.48 0.48" xmlns="http://www.w3.org/2000/svg">
                <path d="M.48.15H0V.12h.48zm0 .24H0V.36h.48zm0-.12H0V.24h.48z" />
              </svg>
              <p className="ml-2 font-serif">Menu</p>
            </ButtonCustom>
            <Drawer title="Close" placement={"left"} width="33%" onClose={onClose} open={open}>
              <div className="px-14 pb-10">
                <Dropdown
                  id="dropdown1"
                  title="Gifts"
                  isOpen={isOpen === "dropdown1"}
                  onClick={toggleDropdown}
                  styleTitle="text-xl"
                  style="text-base font-normal pl-4"
                  items={
                    <>
                      <li className="py-3">Gifts for Her</li>
                      <li className="py-3">Gifts for Him</li>
                      <li className="py-3">Gifts for Baby</li>
                      <li className="py-3">Personalization</li>
                    </>
                  }
                />
                <Dropdown
                  id="dropdown2"
                  title="Man"
                  isOpen={isOpen === "dropdown2"}
                  onClick={toggleDropdown}
                  styleTitle="text-xl"
                  style="text-base font-normal pl-4"
                  items={
                    <>
                      <li className="py-3">Pants</li>
                      <li className="py-3">Shirts</li>
                      <li className="py-3">Sandals</li>
                      <li className="py-3">Shoes</li>
                      <li className="py-3">Accessories</li>
                    </>
                  }
                />
                <Dropdown
                  id="dropdown3"
                  title="Women"
                  isOpen={isOpen === "dropdown3"}
                  onClick={toggleDropdown}
                  styleTitle="text-xl"
                  style="text-base font-normal pl-4"
                  items={
                    <>
                      <li className="py-3">Pants</li>
                      <li className="py-3">Shirts</li>
                      <li className="py-3">Sandals</li>
                      <li className="py-3">Shoes</li>
                      <li className="py-3">Accessories</li>
                    </>
                  }
                />
                <Dropdown
                  id="dropdown4"
                  title="Flash Sell"
                  isOpen={isOpen === "dropdown4"}
                  onClick={toggleDropdown}
                  styleTitle="text-xl"
                  style="text-base font-normal pl-4"
                  items={
                    <>
                      <li className="py-3">Pants</li>
                      <li className="py-3">Shirts</li>
                      <li className="py-3">Sandals</li>
                      <li className="py-3">Shoes</li>
                      <li className="py-3">Accessories</li>
                    </>
                  }
                />
              </div>
              <hr className=" border-t border-gray-300" />
              <div className="p-4 ">
                <div className="py-3 font-normal pl-4">Sustainability</div>
                <div className="py-3 font-normal pl-4">Find a Store</div>
                <div className="py-3 font-normal pl-4">Can we help you ?</div>
              </div>
            </Drawer>
          </div>
          <div className="ml-24 hidden md:flex">
            <ButtonCustom className="absolute" onClick={showSearch}>
              <svg width={24} height={24} viewBox="0 0 0.45 0.45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m.435.435-.12-.12m-.12.06a.18.18 0 1 1 0-.36.18.18 0 0 1 0 .36Z"
                  stroke="#000"
                  strokeWidth={0.03}
                />
              </svg>
              <p className="ml-2 font-serif">Search</p>
            </ButtonCustom>

            {isSearchOpen && <SearchComponent onClose={closeSearch} />}
          </div>
        </div>

        <Link to="/" className="h-4 flex justify-center ">
          <p className="font-mono font-bold text-2xl">27JAN</p>
        </Link>
        <div className="flex justify-end pr-9">
          <div>
            <ButtonCustom className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 0.6 0.6" xmlSpace="preserve">
                <path d="M.51.42H.12Q.092.418.09.39V.06H0V0h.12q.028.002.03.03v.33h.336L.531.18H.21V.12h.36C.588.12.603.138.6.156l-.06.24A.03.03 0 0 1 .51.42m-.3.12A.06.06 0 0 1 .15.6.06.06 0 0 1 .09.54a.06.06 0 0 1 .12 0m.33 0A.06.06 0 0 1 .48.6.06.06 0 0 1 .42.54a.06.06 0 0 1 .12 0" />
              </svg>
            </ButtonCustom>
          </div>
          <div className="ml-11">
            <ButtonCustom className="absolute">
              <svg width={24} height={24} viewBox="0 0 0.72 0.72" xmlns="http://www.w3.org/2000/svg">
                <path d="M.471.381a.18.18 0 1 0-.223 0 .3.3 0 0 0-.187.245.03.03 0 0 0 .06.007.24.24 0 0 1 .477 0 .03.03 0 0 0 .03.027h.003A.03.03 0 0 0 .657.627.3.3 0 0 0 .469.381M.36.36A.12.12 0 1 1 .48.24a.12.12 0 0 1-.12.12" />
              </svg>
            </ButtonCustom>
          </div>
        </div>
      </div>
      <hr className=" border-t border-gray-300" />
    </header>
  );
}

export default Header;
