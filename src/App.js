import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routes } from "./helper/routes";
import { Singin } from "./Login-logout/login";
import { useState } from "react";
import AdminButton from "./adminFolder/admin";
import ShoppingCart from "./components/ShoppingCart";
import CartProvider from "./context/cart/CartState";
import LocalStoragesDates from "./components/creatingLocalstoragesDate";
import background from "./assets/image/2.jpg";
import "./App.css";
export default function App() {
	const [adminStatus, setAdminstatus] = useState(true);

	function Admin() {
		return <button onClick={() => setAdminstatus(false)}>Admin</button>;
	}

	if (adminStatus) {
		return (
			<CartProvider>
				<Router>
					<LocalStoragesDates />
					<div>
						<Header />
						<Admin />
						<Nav />
						<Switch>
							{Routes.map(({ route, component: Component }, index) => (
								<Route exact path={route} key={index}>
									<Component />
								</Route>
							))}
							<Route path="*">
								<h2>Not Found</h2>
							</Route>
							<Route path="*">
								<h2>Not Found</h2>
							</Route>
						</Switch>
						<ShoppingCart />

						<Footer />
					</div>
				</Router>
			</CartProvider>
		);
	}
	return <AdminButton />;
}
