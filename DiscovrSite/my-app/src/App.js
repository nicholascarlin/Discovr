
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import homePage from "./pages/HomePage.js"
import loginPage from "./pages/loginPage"

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={homePage} />
        <Route exact path="/login" component={loginPage} />
				<Redirect to="/" /> {/* Path not matched */}
			</Switch>
		</Router>
	);
};


export default App;
