import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routes } from "./helpers/routes";
import { useState } from "react";
import CartProvider from "./context/cart/CartState";
import LocalStoragesDates from "./helpers/creatingLocalstoragesDate";
import { Tablelist } from "./Tablerezervation/tablelist";
import "./App.css";
import Scroll from "./components/ScrollToTop/ScrollToTop";
import { Adminpage } from "./adminFolder/admin";
import SearchComponent from "./containers/search/Search";

export const Rezervcontext = React.createContext();

export default function App() {
  const [rezervePagestat, setRezzervpagestat] = useState(false);
  const changeRezerveagestatus = () => {
    setRezzervpagestat((prev) => !prev);
  };
  const [adminpage, setAdminpage] = useState(false);
  const changeAdminpagestat = () => {
    setAdminpage((prev) => !prev);
  };

  if (!adminpage) {
    return (
      <Rezervcontext.Provider value={rezervePagestat}>
        <CartProvider>
          <Router>
            <LocalStoragesDates />
            <div className="app-wrapper">
              <Header />
              <main>
								<div className="container-info">
									<Nav changeRezerveagestat={changeRezerveagestatus} />
									<SearchComponent />
								</div>
                <Tablelist changeRezerveagestat={changeRezerveagestatus} />
                <Switch>
                  {Routes.map(({ route, component: Component }, index) => (
                    <Route exact path={route} key={index}>
                      <Component />
                    </Route>
                  ))}
                  <Route path="*">
                    <h2>Not Found</h2>
                  </Route>
                </Switch>
                <Scroll showBellow={250} />
              </main>
              <Footer changeStat={changeAdminpagestat} />
            </div>
          </Router>
        </CartProvider>
      </Rezervcontext.Provider>
    );
  }
  return <Adminpage changeStat={changeAdminpagestat} />;
}
