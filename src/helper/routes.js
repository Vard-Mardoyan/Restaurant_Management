import About from "../pages/About";
import Contact from "../pages/Contact";
import Drink from "../pages/Drink";
import Food from "../pages/Food";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Sweets from "../pages/Sweets";

export const Routes = [
  {
    route: "/",
    component: Home,
    title: 'Home'
  },
  {
    route: "/about",
    component: About,
    title: 'About'
  },
  {
    route: "/logIn",
    component: LogIn,
    title: 'Log In'
  },
  {
    route: "/contact",
    component: Contact,
    title: 'Contact Us'
  },

  {
    route: "/food",
    component: Food,
    title: 'Food'
  },
  {
    route: "/sweets",
    component: Sweets,
    title: 'Sweets'
  },
  {
    route: "/drink",
    component: Drink,
    title: 'Drink'
  },

 
];