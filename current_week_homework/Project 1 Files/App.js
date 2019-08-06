import React, { Component } from 'react';
import './App.css';
import ListItem from './Components/ListItems';
import data from './Json.json';

export default class App extends Component {
	state = {
		websiteName: 'My Grocery List',
		groceries: [],
		value: '',
		price: '',
		isDisabled: true,
	};

// Form Validation for Grocery Item & Price & confirms price isn't negative
formValidation = () => {
	// check if we have a value
	if (!this.state.value || !this.state.price || this.state.price < 0){
		return false;
	} return true;
}

//get initial JSON
componentDidMount() {
	this.setState({
		groceries: data.groceries,
	})
}

handleSubmit = (e) => {
		e.preventDefault();
		const isValid = this.formValidation();
		if (isValid){
			this.setState({
				groceries: [
					...this.state.groceries,
					{
						name: this.state.value,
						price: this.state.price,
					}
				],
				value: '',
				price: ''
			});
		} else { alert("Please Enter a Valid Item") }
	};

// remove item
	removeItem = (event, index) => {
		let newArray = this.state.groceries;
		newArray.splice(index, 1);
		this.setState({
			groceries: newArray
		});
	};

// changeHandler for Text Box
changeHandler = (e) => {
		this.setState({
			isDisabled: false,
			value: e.target.value,
	})
};

// change handler for price input
priceChangeHandler = (e) => {
		this.setState({
			price: e.target.value,
	})
};

editItem = (i, newItem) => {
	let newArray = this.state.groceries;
	newArray[i].name = newItem;
	this.setState({
		groceries: newArray
	});
};


	render() {

		let groceries = this.state.groceries.map((item, index) => {
			return <ListItem item={item} index={index} editItem={this.editItem} remove={(event) => this.removeItem(event, index)}/>
		});
		{/*let prices = this.state.groceries.map((price, index)=> {
			return <CalcTotal price={price} index={index}/>
		});*/}
		console.log(this.state.groceries);
		return (
			<main>
				<h1>{this.state.websiteName}</h1>
				<div>
					<form className="row mb-5" onSubmit={this.handleSubmit}>
						<input
							placeholder="Enter Grocery Item Here"
							type="text"
							className="form-control"
							value={this.state.value}
							onChange={this.changeHandler}
						/>

						<input
							placeholder="Enter price in $"
							type="number"
							disabled={this.state.isDisabled}
							className="form-control md-6"
							value={this.state.price}
							onChange={this.priceChangeHandler}
						/>


						<button className="btn btn-success" disabled={this.state.isDisabled}>Add Item</button>
					</form>
				</div>
				<li className="list-group-item text-left">
					<span className="mr-2 text-left">
						<b>Price</b>
					</span>
				<b>Item Name</b></li>
				<div>{groceries}</div>

			</main>
		);
	}
}

// CHOOSE ONE OF THE PROMPTS BELOW FOR YOUR PROJECT 1

// Grocery List Project
// BRIEF: Create a grocery list application that will render out a grocery list of items from the JSON data
// Each item should display a name and a price at minimum.
// 1. There should be an input field and a button that allows a user to add a grocery item to the list - Complete
// 2. Your grocery list should be kept in a json file and then loaded into the State of your application. - Complete
// 3. Each grocery list item should be a new Component and you will pass the items information to the list with props - Complete
// 4. You should use the .map function to iterate the items in the list into Components - Complete
// 5. After the user adds the grocery item, make sure to clear the input for a good user experience! - Complete
// 6. You should be able to remove items from the Grocery list - Complete

// BONUSES:
// 1. Can you make it so that each item in the list could be editable? - Complete
// 2. Can you make a button or a value that would print out the total of each item in the list? -
// 3. Can you do data validation so that if someone trys to submit an input without any text in it they get an error? - Complete
