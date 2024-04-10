import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  let [btnNameReact, setBtnNameReact] = useState("Login");

  //  subscribing to the store usiing a selector

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems)

  return (
    <div className="pr-6 md:pl-12 md:pr-12 pt-4 pb-2 flex justify-between items-center border-2 rounded-sm sticky top-0 z-50 bg-cyan-50">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo-img" className="w-20 rounded-full" />
      </div>
      <div className="nav-items">
        <ul className="flex sm:gap-5 gap-3">
          <li className="text-black hover:text-orange-500 xsm:font-semibold xsm:text-lg">
            <Link to="/" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className="text-black hover:text-orange-500 xsm:font-semibold xsm:text-lg">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon icon={faUser} /> About
            </Link>
          </li>
          <li className="text-black hover:text-orange-500 xsm:font-semibold xsm:text-lg">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon icon={faCartShopping} /> [{cartItems.length}]
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
