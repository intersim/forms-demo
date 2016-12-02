import React, { Component } from 'react';
import { Link } from 'react-router';

// Extending our Link component for our own convenience:
class AppLink extends Component {  
  render: function() {  
    return (
      <Link to={this.props.to} activeClassName="active-link">
        {this.props.children}
      </Link>;
    );
  }
}

/* Now we can use <AppLink> like this: 
	<AppLink to="/">Home</AppLink>
	<AppLink to="/about">About</AppLink>
	<AppLink to="/contact">Contact</AppLink>
*/

// Or do this instead... now <AppLink> can accept properties with them being hard-coded (spread operator!):
var AppLink = function(props) {
  return <Link {...props} activeClassName="active-link" />;
}