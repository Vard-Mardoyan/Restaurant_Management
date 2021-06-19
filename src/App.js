import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routes } from "./helpers/routes";
import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";
import CartProvider from "./context/cart/CartState";
import LocalStoragesDates from "./components/creatingLocalstoragesDate";
import { Tablelist } from "./RezervFolder/tablelist"
//import background from "./assets/image/2.jpg";
import "./App.css";
import Scroll from "./components/ScrollToTop/ScrollToTop";
import { Adminpage } from "./adminFolder/admin"

export const Rezervcontext = React.createContext()

export default function App() {
	const [rezervePagestat, setRezzervpagestat] = useState(false)    
	const changeRezerveagestatus = () => {
		setRezzervpagestat(prev => !prev)
	}
	const [adminpage, setAdminpage] = useState(false)
	const changeAdminpagestat = () => {
		setAdminpage(prev => !prev)
	}

    
	if(!adminpage){
		return (
			<Rezervcontext.Provider value = {rezervePagestat}>
			<CartProvider>
				<Router>
					<LocalStoragesDates />
					<div>
						<Header />
						<Nav changeRezerveagestat = {changeRezerveagestatus}/>
						<Tablelist changeRezerveagestat = {changeRezerveagestatus}/>
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
						<Scroll showBellow={250} />
						<Footer changeStat = {changeAdminpagestat}/>
					</div>
				</Router>
			</CartProvider>
			</Rezervcontext.Provider>
		);
	}
	return <Adminpage changeStat = {changeAdminpagestat}/>
}
