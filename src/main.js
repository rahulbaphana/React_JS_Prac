$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorsPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var App = React.createClass({
	render: function() {
		var Child;

		switch(this.props.route){
			case 'about': Child = About; break;
			case 'authors': Child = Authors; break;
			default : Child = Home;
		}

		return (
			<div>
				<Header/>
				<Child/>
			</div>
		);
	}
});

function render(){
	var routeText = window.location.hash.substr(1);
	React.render(<App route={routeText}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();