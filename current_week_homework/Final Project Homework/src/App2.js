import React, { Component } from 'react';
import './App.css';
import ListItem from './Components/ListItems';
import  data from './Json.json';

export default class App extends Component {
	state = {
		websiteName: 'My Grocery List',
		groceries: [],
		value: ''
	};

	componentDidMount() {
		let newGroceries = this.state.groceries;
		for (let groceries of data.groceries) {
			newGroceries.push(groceries)
		}
		this.setState({
			groceries: newGroceries
		})
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			groceries: [
				...this.state.groceries,
				{
					name: this.state.value,
					price: 4
				}
			]
		});
	};

	removeItem = (index) => {
		let newArr = this.state.groceries;
		newArr.splice(index, 1);
		this.setState({
			groceries: newArr
		});
	};

	editItem = (index, newItem) => {
		let newArr = this.state.groceries;
		newArr[index].name = newItem;
		this.setState({
			groceries: newArr
		});
	};

	render() {
		let groceries = this.state.groceries.map((item, index) => {
			return <ListItem item={item} index={index} editItem={this.editItem} remove={this.removeItem} />;
		});
		return (
			<main>
				<div className="container gradient mt-5 p-5">
					<div className="row">
						<h1>{this.state.websiteName}</h1>
					</div>
				</div>
				<div className="container mt-5">
					<form className="row mb-5" onSubmit={this.handleSubmit}>
						<input
							type="text"
							className="form-control"
							value={this.state.value}
							onChange={this.handleChange}
						/>

						<button className="btn btn-primary col mt-2">Add Item</button>
					</form>
					<div>{groceries}</div>
				</div>
			</main>
		);
	}
}

// Grocery List Project
// BRIEF: Create a grocery list application that will render out a grocery list of items from the JSON data
// Each item should have a name and a price at minimum.
// 1. There should be an input field and a button that allows a user to add a grocery item to the list
// 2. Your grocery list should be kept in the State of your application.
// 3. Each grocery list item should be a new Component and you will pass the items information to the list with props
// 4. You should use the .map function to iterate the items in the list into Components
// 5. After the user adds the grocery item, make sure to clear the input for a good user experience!
// 6. You should be able to remove items from the Grocery list

// BONUSES:
// 1. Can you make it so that each item in the list could be editable?
// 2. Can you make a button or a value that would print out the total of each item in the list?
// 3. Can you do data validation so that if someone trys to submit an input without any text in it they get an error?
