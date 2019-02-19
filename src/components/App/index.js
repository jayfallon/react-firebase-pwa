import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import * as ROUTES from "../../constants/routes";

import { withAuthentication } from "../Session";

import { ThemeProvider } from "styled-components";

const theme = {
	globalBg: "#FBFAFC",
};

const SkipNavLink = () => (
	<div>
		<Link to="#main-content">Skip to main content</Link>
	</div>
);

const App = () => (
	<ThemeProvider theme={theme}>
		<Router>
			<>
				<SkipNavLink />
				<nav>
					<Navigation />
				</nav>
				<header>Hello I'm the header</header>
				<hr />
				<main id="main-content" role="main">
					<Route exact path={ROUTES.LANDING} component={LandingPage} />
					<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
					<Route path={ROUTES.SIGN_IN} component={SignInPage} />
					<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
					<Route path={ROUTES.HOME} component={HomePage} />
					<Route path={ROUTES.ACCOUNT} component={AccountPage} />
					<Route path={ROUTES.ADMIN} component={AdminPage} />
				</main>
				<footer>Hey there, I'm the footer</footer>
			</>
		</Router>
	</ThemeProvider>
);

export default withAuthentication(App);
