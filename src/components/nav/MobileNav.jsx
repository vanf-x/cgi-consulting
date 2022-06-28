import Navlinks from "./Navlinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./MobileNav.css";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);
  
  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      className="menu-icon"
      onClick={() => setOpen(!open)}
    ></FontAwesomeIcon>
  );
  const closeIcon = (
    <FontAwesomeIcon
      icon={faXmark}
      className="menu-icon"
      onClick={() => setOpen(!open)}
    ></FontAwesomeIcon>
  );
  return (
    <nav className="mobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <Navlinks isMobile={true} closeMobile={closeMobile}/>}
    </nav>
  );
};

export default MobileNav;
