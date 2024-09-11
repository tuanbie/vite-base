import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../../../../compoments/icon/icon";
import { Drawer } from "antd";
import Dropdown from "../../../../compoments/DropDown/dropdown";
import SearchComponent from "../../../../compoments/Input";
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
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
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm ">
      <div className=" bg-white sm:h-[89px] h-[55px] flex justify-between items-center px-9">
        <div className="flex gap-5">
          <div>
            <ButtonCustom className="" onClick={showDrawer} value="left">
              <CiMenuBurger />
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
          <div className=" hidden sm:flex">
            <ButtonCustom className="" onClick={showSearch}>
              <CiSearch className="text-xl" />
              <p className="font-serif">Search</p>
            </ButtonCustom>

            {isSearchOpen && <SearchComponent onClose={closeSearch} />}
          </div>
        </div>

        <Link to="/" className="">
          <p className="font-mono font-bold text-2xl">27JAN</p>
        </Link>

        <div className="flex gap-5 ">
          <div className="hidden sm:flex">Call Us</div>

          <CiShoppingCart className="text-xl" />
          <CiUser className="text-xl" />
        </div>
      </div>
      <hr className=" border-t border-gray-300" />
    </header>
  );
}

export default Header;
