var React = require('react');

const Main = React.createClass({
	render() {
		return (
			<div className='main-container'>
				Hello from Main!
				{this.props.children}
			</div>
		);
	}
});

module.exports = Main;
