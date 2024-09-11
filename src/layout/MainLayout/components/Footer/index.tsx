import { useState } from "react";

function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black bottom-0">
      <hr className=" border-t border-gray-300" />

      <div className="grid grid-cols-4 gap-4 percent-padding py-10 px-36">
        <div>
          <div className="py-3">Help</div>
          <div className="py-3">
            <p>
              You can <a className="underline underline-offset-4">call</a> or{" "}
              <a className="underline underline-offset-4">email us</a>.
            </p>
            <div className="py-3">FAQ's</div>
            <div className="py-3">Product Care</div>
            <div className="py-3">Stores</div>
          </div>
        </div>
        <div>09</div>
        <div>09</div>
        <div>09</div>
      </div>
      <div></div>
    </header>
  );
}

export default Footer;
