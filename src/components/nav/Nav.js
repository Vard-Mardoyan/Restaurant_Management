import { Link } from "react-router-dom";
import { Routes } from "../../helpers/routes";
import "./Nav.css";
import { useContext, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../context/cart/CartState";
import { Singin } from "../../Login-logout/login";
import Cart from "../ShoppingCart";
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import Popover from '@material-ui/core/Popover';
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
//import SearchContainer from "../../container/search/Search";

export default function Nav({ changeRezerveagestat }) {
  const { cartItems, showHideCart } = useCartContext();
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 1000) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav className={`main-nav ${show && "scrolling-nav"}`}>
      {Routes.map(({ route, title }) => (
        <Link key={title} className="link" to={route}>
          {title}
        </Link>
      ))}
      <Singin changeRezerveagestat={changeRezerveagestat} />
      <Cart />
    </nav>
  );
}

//  return (
// 	<div className="nav-container">
// 	<nav className={`main-nav ${show && "scrolling-nav"}`}>
// 		{Routes.map(({ route, title }) => (
// 			<Link key={title} className="link" to={route}>
// 				{title}
// 			</Link>
// 		))}
// 		<Singin changeRezerveagestat={changeRezerveagestat} />
// 		<Cart />
// 	</nav>
// 	{/* <div>
// <SearchContainer />
// </div> */}
// </div>
// );
