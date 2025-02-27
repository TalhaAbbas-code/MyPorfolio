import { IconHexagon } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];
const navLinks = (col: Boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  };
  return links.map((link, index) => {
    return (
      <a
        key={index}
        onClick={handleClick}
        className={`${
          col ? "flex flex-col items-center" : ""
        } text-textColor text-lg font-mono hover:underline hover:text-primaryColor`}
        href={`#${link}`}
      >
        <span className="text-primaryColor"></span>
        {link}
      </a>
    );
  });
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);

    setShadow(window.scrollY > 70);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`flex ${show ? "translate-y-0" : "-translate-y-28"} ${
        shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""
      } transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20 `}
    >
      <div className="relative">
        <IconHexagon
          className="z-10"
          size={isMobile ? 45 : 60}
          color="#64FFDA"
          stroke={1.25}
        />
        <span className="absolute inset-0 flex items-center justify-center text-primaryColor font-bold text-xl">
          TA
        </span>
      </div>

      <div className="bs:flex gap-8 hidden">{navLinks(false, null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };
