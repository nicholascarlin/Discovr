
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import homePage from "./pages/homePage.js"

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={homePage} />
        
				<Redirect to="/" /> {/* Path not matched */}
			</Switch>
		</Router>
	);
};


export default App;
