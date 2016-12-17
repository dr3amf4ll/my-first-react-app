var React  = require('react');
var Header = require('./Header');

var App = React.createClass({
  render: function () {
    return (
    	<div>
    		<Header header="Header" subheader="Sub Header" />
	    </div>
	);
  }
});

module.exports = App;