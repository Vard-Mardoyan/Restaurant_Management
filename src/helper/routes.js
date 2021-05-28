import About from "../pages/About";
import Beer from "../pages/Beer";
import Contact from "../pages/Contact";
import Drink from "../pages/Drink";
import Food from "../pages/Food";
import Home from "../pages/Home";
import Sweets from "../pages/Sweets";
import StaffData from "../pages/Staff/Staff";



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
		route: "/staffData",
		component: StaffData,
		title: "StaffData",
	},
];
