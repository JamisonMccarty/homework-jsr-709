import React, { Component } from 'react';
import './App.css';
import logo from './images/studio-ghibli.png';


export default class App extends Component {
	state = {
		websiteName: 'Studio Ghibli Films',
		data: {},
		//Studio Ghibli API url
		url: `https://ghibliapi.herokuapp.com/films`,
		value: [],
		//MyAnimeList API (MAL url)
		malUrl: [`https://api.jikan.moe/v3/anime/513/reviews`],
		malData: {},
		//Initializing
		firstMovie: [],
		firstDescription: [],
		firstDirector: [],
		firstReview: ["Enter Movie ID and Click to see Review"],
		buttonName: "Next",
		count: 1,
		movieIds: [513, 578, 523, 512, 1029, 416, 1030, 585, 164, 415, 199, 597, 431, 1829, 2890, 7711, 10029, 16662, 16664, 21557],
		firstMovieId: [513],

	};

	componentDidMount() {
		this.makeRequest();
	};


// we use arrow function because if we made a defined function
// then React would be confused by 'this'
	makeRequest = () => {
		fetch(this.state.url).then((response)=>{
			return response.json();
		}).then((data)=>{
			console.log(data);
			this.setState({
				data: data,
				firstMovie: data[0].title,
				firstDescription: data[0].description,
				firstDate: data[0].release_date,
			})
		});
		fetch(this.state.malUrl).then((response)=>{
			return response.json();
		}).then((data)=>{
			console.log(data);
			this.setState({
				malUrl: `https://api.jikan.moe/v3/anime/513/reviews`,
				malData: data,
				firstReview: data.reviews[0].content,
			})
		})
	};

	handleChange = (e) => {
	    this.setState({
				value: e.target.value,
				malUrl:`https://api.jikan.moe/v3/anime/${e.target.value}/reviews`,
			})
	 };

	handleClick = () => {
		fetch(this.state.malUrl).then((response) => {
			if (response.status === 200) {
			return response.json();
			} else {
			throw new Error('Something went wrong');
			}
		}).then((data) => {
			console.log(data);
				this.setState({
					malUrl:`https://api.jikan.moe/v3/anime/${this.state.value}/reviews`,
					malData: data,
					firstReview: data.reviews[0].content
				})
		}).catch((error) => {
				console.log(error)
			});
	};


	clickNextHandler = () => {
		let i = this.state.count;
				this.setState({
					firstMovie: this.state.data[i].title,
					firstDescription: this.state.data[i].description,
					firstDate: this.state.data[i].release_date,
					firstMovieId: this.state.movieIds[i],
					count: i+1,
					buttonName: "Next",
				})
				console.log(i);
				console.log(this.state.data[i].title);
				// need to reset the count
				if (i=== 19){
					this.setState({
					buttonName: "Back To Start",
					count: 0,
				})
			}
	}

	render() {
		return (
			<main>

				<img  alt="Studio Ghibli Logo" src={logo}></img>
				<h1 className="text-dark">{this.state.websiteName}</h1>
				<div className="movieBox card rounded shadow">
					<div className="title">
					<h2>{this.state.firstMovie}</h2>
					</div>
					<div className="description">
					<p>{this.state.firstDescription}</p>
					</div>
					<div className="year">
					<p className="year">Release Year: {this.state.firstDate}    Movie ID: <span className="ID">{this.state.firstMovieId}</span></p>

					</div>
				</div>
				<div>
				<button className="nextButton"  onClick={this.clickNextHandler}>{this.state.buttonName}</button>

				</div>
				<div className="bottomHalf">
				<h1 className="text-dark">MyAnimeList Top Review</h1>
				<div className="reviewBox card rounded shadow">
					<div className="review">
					<p>{this.state.firstReview}</p>
				</div>
				</div>
				<input placeholder="Enter Movie ID Here" onChange={this.handleChange}/>
				<button className="nextButton" onClick={this.handleClick}>Load Review</button>
				</div>
			</main>
		);
	}
}


// Removed Back Button
	// clickBackHandler = () => {
	// 	let i = this.state.count;
	// 			this.setState({
	// 				firstMovie: this.state.data[i].title,
	// 				firstDescription: this.state.data[i].description,
	// 				firstDate: this.state.data[i].release_date,
	// 				firstMovieId: this.state.movieIds[i],
	// 				count: i-1,
	// 			})
	// 			console.log(i);
	// 			console.log(this.state.data[i].title);
	// 			// need to reset the count
	// 			if (i=== 0){
	// 				this.setState({
	// 					count: 19,
	// 				})
	// 			}
	//
	// }
