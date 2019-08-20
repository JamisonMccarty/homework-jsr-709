import React, { Component } from 'react';
import './App.css';
import FarmAnimal, {Kitten, Dog, Cow, Pig} from './Constructors/Animals.js';


export default class App extends Component {
	state = {
		websiteName: 'Farm Homework',
		animals: [],
		value: '',
	};

	// Hey Mansoor, sorry my homework is late, I had to make a last second trip
	// down to visit my family, and then Monday I had to work late at the day job

	componentDidMount() {
		fetch('http://demo3965052.mockable.io/farm')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				this.handleAnimals(data);
			});
			console.log(this.state.animals);
	}

// Not the cleanest solution -- conditionals to check what type of animal is
// being typed in by the user to use the correct Constructor

	handleAnimals = (data) => {
		let allAnimals = [];
		console.log(data);
		for(let item of data.animals){
			if (item.name === "cat"){
				let kitten = new Kitten(item.name, item.image, item.talk);
				allAnimals.push(kitten);
			} else if(item.name === "cow"){
				let cow = new Cow(item.name, item.image, item.talk);
				allAnimals.push(cow);
			} else if(item.name === "pig"){
				let pig = new Pig(item.name, item.image, item.talk);
				allAnimals.push(pig);
			} else if(item.name === "dog"){
				let dog = new Dog(item.name, item.image, item.talk);
				allAnimals.push(dog);
			}
		}
		this.setState({
			animals: allAnimals
		})
		console.log(this.state.animals);
	}

// Again, I'm sure this isn't the cleanest way to solve this but conditionals
// to pass in the right image and sound into each animal constructor

	handleClick = () => {
		let wholeFarm = this.state.animals;
		if (this.state.value === "cow"){
			let inputAnimal = new Cow(this.state.value, "https://assets3.thrillist.com/v1/image/2752859/size/tmg-slideshow_l.jpg", "moooo");
			wholeFarm.push(inputAnimal);
		} else if (this.state.value === "dog"){
			let inputAnimal = new Dog(this.state.value, "https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg", "woof");
			wholeFarm.push(inputAnimal);
		} else if (this.state.value === "cat"){
			let inputAnimal = new Kitten(this.state.value, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTum3LGUe1feZZcdZ4tZidTp6b77SURgCCLW3CJgjyTIlZU1iQg", "meow");
			wholeFarm.push(inputAnimal);
		} else if (this.state.value === "pig"){
			let inputAnimal = new Pig(this.state.value, "https://images-na.ssl-images-amazon.com/images/I/71N88Xv1G8L._SY606_.jpg", "oink");
			wholeFarm.push(inputAnimal);
		} else {
			alert('Enter valid animal, please!')
		}
		this.setState({
			animals: wholeFarm,
			value: '',
		})
	}

// I wanted to add some functionality to remove an animal by input value,
// but it just got too late so I just made it a simple pop to remove the Last
// animal. Not really that useful, haha!

	removeAnimal = () => {
		let wholeFarm = this.state.animals;
		wholeFarm.pop();
		this.setState({
			animals: wholeFarm,
		})
	}

	changeHandler = (e) =>{
		e.preventDefault();
		this.setState({
			value: e.target.value,
		})
	}

	render() {
		return (
			<main className="container p-3">
				<h1>{this.state.websiteName}</h1>
				<div className="row justify-content-center">
					{this.state.animals.map((animal,index)=>{
						return(<div key={index} className="card p-3 m-3 col-2" onClick={animal.talk}><img alt={animal.name} src={animal.image}/></div>)
					})}

				</div>
				<input placeholder="Enter Animal Here" value={this.state.value} onChange={this.changeHandler}/>
				<button className="btn btn-primary m-3" onClick={this.handleClick}>Add Animal!</button>
				<button className="btn btn-danger m-3" onClick={this.removeAnimal}>Remove Last Animal!</button>
			</main>
		);
	}
}
