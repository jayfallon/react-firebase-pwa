import React from "react";

import { withAuthorization } from "../Session";

const HomePage = () => (
	<>
		<h1>Home</h1>
		<p>the home page is accessible by every single signed in user</p>
	</>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
