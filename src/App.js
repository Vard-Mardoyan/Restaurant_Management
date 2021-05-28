import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Nav from "./components/Nav";
import { Routes } from "./helper/routes";
import { Singin } from "./Login-logout/login"
import { LocalStoragesDates } from "./components/creatingLocalstoragesDate"

export default function App() {
	return (
		<Router>
			<LocalStoragesDates/>
			<div>
				<Header />
				<Singin/>
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
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
