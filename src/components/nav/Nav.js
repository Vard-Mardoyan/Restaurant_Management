import { Link } from "react-router-dom";
import { Routes } from "../../helper/routes";
import "./Nav.css";
import { useContext, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../context/cart/CartState";
import { Singin } from "../../Login-logout/login";

export default function Nav({ changeRezerveagestat }) {
	const { cartItems, showHideCart } = useCartContext();
	const [show, setShow] = useState(true);
	const controlNavbar = () => {
		if (window.scrollY > 100) {
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
		<div>
			<nav className={`main-nav ${show && "scrolling-nav"}`}>
				{Routes.map(({ route, title }) => (
					<Link key={title} className="link" to={route}>
						{title}
					</Link>
				))}
				<Singin changeRezerveagestat={changeRezerveagestat} />

				<div className="nav__right">
					<div className="cart__icon">
						<FaShoppingCart onClick={showHideCart} />
						{cartItems.length > 0 && (
							<div className="item__count">
								<span>{cartItems.length}</span>
							</div>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
}
