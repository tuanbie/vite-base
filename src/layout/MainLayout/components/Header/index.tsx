import { Button, Input } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between p-4 shadow-md relative">
      {/* Mobile Menu Button */}
      {/* Logo */}
      <button className="md:hidden text-gray-300 hover:text-white focus:outline-none" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>{" "}
      <Link to="/" className="h-11 w-auto flex justify-between ">
        <img src="logo.png" alt="Logo" />
      </Link>
      {/* Desktop Navigation Tabs */}
      <nav className="hidden md:flex flex-1 justify-center space-x-8">
        <a href="#product" className="text-gray-300 hover:text-white transition duration-200">
          Product
        </a>
        <a href="#category" className="text-gray-300 hover:text-white transition duration-200">
          Category
        </a>
        <a href="#about-us" className="text-gray-300 hover:text-white transition duration-200">
          About Us
        </a>
      </nav>
      {/* Right Side (Shopping Cart and Login) */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="hidden md:block xl:block">
          <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z" />
          </svg>
          <Input
            className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'"
          />
        </div>
        <button className="relative text-gray-300 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L4 6H1v2h2l1.6 8.6a4 4 0 0 0 3.9 3.4H19a4 4 0 0 0 3.9-3.4L24 8h-2l-2-4H6zm0 2h12l1.5 3H8.5L6 4zM5 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM15 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        <button className="text-gray-300 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.87 0-7 3.13-7 7v2h14v-2c0-3.87-3.13-7-7-7z" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-800 text-white shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <a href="#category" className="hover:text-gray-400 transition duration-200" onClick={toggleMenu}>
            Category
          </a>
          <a href="#product" className="hover:text-gray-400 transition duration-200" onClick={toggleMenu}>
            Product
          </a>
          <a href="#about-us" className="hover:text-gray-400 transition duration-200" onClick={toggleMenu}>
            About Us
          </a>
          <div className="flex">
            {" "}
            <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z" />
            </svg>
            <Input className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
