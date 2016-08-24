import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Setting from "./components/Setting";
import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history = {hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Setting}></IndexRoute>
		</Route>
	</Router>,
app);