import React from "react";
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
import { Tablelist } from "./RezervFolder/tablelist"

export const Rezervcontext = React.createContext()

export default function App() {
	const [rezervePagestat, setRezzervpagestat] = useState(false)    
	const changeRezerveagestatus = () => {
		setRezzervpagestat(prev => !prev)
	}
	

	return (
		<Rezervcontext.Provider value = {rezervePagestat}>
		<CartProvider>
			<Router>
				<LocalStoragesDates />
				<div>
					<Header />
					<Nav changeRezerveagestat = {changeRezerveagestatus}/>
					<Tablelist/>
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
		</Rezervcontext.Provider>
	);
}
