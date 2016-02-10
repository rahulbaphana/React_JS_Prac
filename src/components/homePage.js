"use strict";

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Pluralsight administration</h1>
				<p>React, React Router & Flux for extra responsive site.</p>
			</div>
		);
	}
});

module.exports = Home;