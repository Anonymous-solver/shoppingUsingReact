import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";

function App() {
	return (
		<div>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Shop></Shop>
					</Route>
					<Route path="/shop">
						<Shop></Shop>
					</Route>
					<Route path="/review">
						<Review></Review>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
