import React, { Component } from 'react';

export default class ListItem extends Component {
	state = {
		currentValue: '',
		editing: false,
		totalPrice: 6,
	}


edit = () => {
		if (this.state.editing) {
			this.props.editItem(this.props.index, this.state.currentValue);
			this.setState({
				editing: false
			});
		} else {
			this.setState({
				editing: true
			});
		}
	};

	changeHandler = (e) => {
			this.setState({
				currentValue: e.target.value,
		})
	};

	render() {
		return (
			<li className="list-group-item text-left">
			<span className="col">${this.props.item.price}</span>
			<b>{this.props.item.name}</b>
				{this.state.editing ? (
					<input
						type="text"
						className="form-control ml-3"
						onChange={this.changeHandler}
						value={this.currentValue}
					/>
				) : (
					''
				)}<button className="btn btn-outline-success pull-right ml-4" onClick={this.edit}>
					{this.state.editing ? 'Save' : 'Edit Item'}
				</button>

				<button onClick={this.props.remove} className="btn btn-outline-danger ml-2">Remove</button>
			</li>
		);
	}
}
