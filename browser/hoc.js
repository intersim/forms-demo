import React, { Component } from 'react';
import { Link } from 'react-router';

// Extending our Link component for our own convenience:
const AppLink = (props) => (
  <Link to={this.props.to} activeClassName="active-link">
    {this.props.children}
  </Link>;
);

/* Now we can use <AppLink> like this: 
	<AppLink to="/">Home</AppLink>
	<AppLink to="/about">About</AppLink>
	<AppLink to="/contact">Contact</AppLink>
*/

// // Or do this instead... now <AppLink> can accept properties with them being hard-coded (spread operator!):
// const AppLink = (props) => <Link {...props} activeClassName="active-link" />;