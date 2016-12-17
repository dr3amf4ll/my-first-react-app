var React     = require('react');
var Container = require('./Container');
var Jumbotron = require('react-bootstrap').Jumbotron;

var Header = React.createClass({
	render: function() {
		return (
			<header>
				<Jumbotron>
	    			<Container>
		    			<h1>{this.props.header}</h1>
		    			<h2>{this.props.subheader}</h2>
		    		</Container>
	    		</Jumbotron>
	    	</header>
		);
	}
});

module.exports = Header;