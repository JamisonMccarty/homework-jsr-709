import React from 'react';

export default class ListItem extends React.Component {
	state = {
		value: ''
	};

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

	triggerUpdate = (e) => {
		this.props.update(e, this.props.item.key, this.state.value);
	};

	render() {
		return (
			<li className="list-group-item">
				{this.props.item.item.title}
				<button className="btn btn-danger m-3" onClick={(e) => this.props.delete(this.props.item.key)}>
					Delete Me
				</button>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<button className="btn btn-success m-3" onClick={(e) => this.triggerUpdate(e)}>
					Update Me
				</button>
			</li>
		);
	}
}
