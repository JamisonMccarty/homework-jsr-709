import React, { Component } from 'react';

export default class ListItem extends Component {

	render() {
		return (
			<li className="list-group-item text-left">
				<b>{this.props.item.name}</b>
			</li>
		);
	}
}
