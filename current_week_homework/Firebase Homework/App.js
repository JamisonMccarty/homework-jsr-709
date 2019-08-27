import React from 'react';
// Import statements for components
import firebase from 'firebase';

export default class App extends React.Component {
	state = {
		blogPosts: [],
		body: '',
		title: '',
		image: '',
	};
	componentDidMount() {
		// 1. firebase config file! we need to add this to get firebase to connect!
		var firebaseConfig = {
		    apiKey: "AIzaSyBSx7G9A8ldaNogd9D62MnCqs3aqHFRlEY",
		    authDomain: "ga-jsr-709.firebaseapp.com",
		    databaseURL: "https://ga-jsr-709.firebaseio.com",
		    projectId: "ga-jsr-709",
		    storageBucket: "",
		    messagingSenderId: "788848286036",
		    appId: "1:788848286036:web:a6c0a42235594b54"
		  };
		// 2. Initialize Firebase Instance
		firebase.initializeApp(firebaseConfig);
		// 3. Make a connection to the database portion of the firebase instance
		var database = firebase.database();
		// 3. Find the specific table we are looking for and make a connection to it
		let blogPosts = database.ref('blogpost');
		// 4. Create a .on('value') event listener for this data base

		this.setState({
			blogPostData: blogPosts,
		})

		blogPosts.on('value', (response)=>{
			// declare a variable to store value from response
			let blogPostData = response.val();

			console.log(blogPostData);
			// declare a blogpost array thats empty for now
			let blogPostArray = [];

			//for in loop to loop through everything
			for(let item in blogPostData){
				blogPostArray.push(blogPostData[item]);
				this.setState({
					blogPosts: blogPostArray,
				})
			}
		})
	}

	handleChange = (e) => {
		this.setState({
			body: e.target.value,
		})
	};

	titleChange = (e) => {
		this.setState({
			title: e.target.value,
		})
	};

	imageChange = (e) => {
		this.setState({
			image: e.target.value,
		})
	};

	handleClick = () => {
		this.state.blogPostData.push({
			title: this.state.title,
			body: this.state.body,
			image: this.state.image,
		});
		this.setState({
			body: '',
			title: '',
			image: '',
		})
	}

	handleDelete = () => {

	}

	deleteAll = () => {
		this.state.blogPostData.remove();
	}

	// 8. Create an handeChange event listener to handle the input from an input!

	// 9. Create an handleClick event listener to handle the click of a button
	// This function should take the data, turn into a data structure that matches the rest of your list
	// ie. maybe an object with a key title
	// Use the .push method of firebase to add the record to the firebase table

	render() {
		//5. Loop over all of the to do list items now living in state from firebase!
		let blogPosts = this.state.blogPosts.map((item, index)=>{
			return (
				<div>
					<li className="list-group-item title">{item.title}</li>
					<img className="blogImage m-3" src={item.image}/>
					<div className="blogText">
						<p className=" body">{item.body}</p>
					</div>
					<button className="btn btn-danger mb-3" onClick={this.handleDelete}>Delete</button>
				</div>
			)

		});


		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<h1 className="bg-light m-3 p-3">Blog</h1>
					</div>
					<div className="row">
						<div className="col-3">
							<input className="m-3" onChange={this.titleChange} placeholder="Enter title here"/>
						</div>
						<div className="col-3">
							<input className="m-3" onChange={this.imageChange} placeholder="Enter Image Address"/>
						</div>
						<div className="col-5">
							<button className="btn btn-primary m-2" onClick={this.handleClick}>Submit</button>
							<button className="btn btn-danger m-2" onClick={this.deleteAll}>Delete All Posts</button>
						</div>
					</div>
					<div className="row">
						<div className="col-10">
							<textarea className="bodyText" type="textarea" placeholder="Enter Blog Post Here..." onChange={this.handleChange}/>
						</div>
					</div>



					</div>

					<div className="col-12">
						<h1 className="bg-light m-3 p-3">Previous Posts</h1>
							{blogPosts}
					</div>
			</div>

		);
	}
}
