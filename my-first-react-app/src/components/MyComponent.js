import React, {Component} from 'react';
import './MyComponent.css';

class MyComponent extends Component {

	state = {
		count: 5
	};

	increaseCount = () => {
		this.setState({count: this.state.count + 1});
	}

	divStyle = {
		fontSize: 5
	}

	render() {
		return <div className = "MyClass" style = { {fontSize: this.state.count}}>this is {this.props.name}s component, my children: {this.props.children} - {this.props.abc} state.count: {this.state.count}
		<br/>
			<button onClick={ () => this.increaseCount() } >increase count</button>
		</div> 
	}
}

export default MyComponent;