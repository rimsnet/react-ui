import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
	<div>
		<h1>Homepage</h1>
		<Link to="/login">Login</Link>
	</div>
	);

export default Homepage;