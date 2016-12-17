var React = require('react');

const containerStyle = {
	margin: '20px auto',
	padding: '0 15px;',
	maxWidth: '800px'
};

var Container = React.createClass({
	render: function() {
		return (
			<div style={containerStyle}>{this.props.children}</div>
		);
	}
});

module.exports = Container;