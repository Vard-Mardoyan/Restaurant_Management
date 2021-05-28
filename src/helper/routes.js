import About from "../pages/About";
import Beer from "../pages/Beer";
import Contact from "../pages/Contact";
import Drink from "../pages/Drink";
import Food from "../pages/Food";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Sweets from "../pages/Sweets";
import StaffData from "../pages/Staff/Staff";

import { RezervationFunction } from "../RezervFolder/rezervation";

export const Routes = [
	{
		route: "/",
		component: Home,
		title: "Home",
	},
	{
		route: "/about",
		component: About,
		title: "About",
	},
	{
		route: "/logIn",
		component: LogIn,
		title: "Log In",
	},
	{
		route: "/contact",
		component: Contact,
		title: "Contact Us",
	},

	{
		route: "/food",
		component: Food,
		title: "Food",
	},
	{
		route: "/sweets",
		component: Sweets,
		title: "Sweets",
	},
	{
		route: "/drink",
		component: Drink,
		title: "Drink",
	},
	{
		route: "/beer",
		component: Beer,
		title: "Beer",
	},
	{
		route: "/rezerv",
		component: RezervationFunction,
		title: "Rezerv",
	},
	{
		route: "/staffData",
		component: StaffData,
		title: "StaffData",
	},
];
