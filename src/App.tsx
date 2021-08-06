import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Form from "./views/form.view";
import EventList from "views/event-list.view";
import "./App.css";

function App() {
	return (
		<Router>
			<Switch>
				<div>
					<Route path="/events" exact={true} component={EventList} />
					<Route path="/form" component={Form} />
					<Redirect to="/events" />
				</div>
			</Switch>
		</Router>
	);
}

export default App;
