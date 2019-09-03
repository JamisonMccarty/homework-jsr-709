import React from 'react';

import {withAuthorization} from '../Session';

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
//
// import React from 'react';
// // Import statements for components
// import ListItem from './Component/ListItem';
//
// import Products from './Component/Products';
//
//
//
// export default class App extends React.Component {
// 	state = {
// 		wishListItems: [],
// 		value: ''
// 	};
//
// //I was swamped at work and am still fleshing out the functionality for my final project
// //
//
// 	componentDidMount() {
// 		var firebaseConfig = {
// 				apiKey: "AIzaSyBSx7G9A8ldaNogd9D62MnCqs3aqHFRlEY",
// 				authDomain: "ga-jsr-709.firebaseapp.com",
// 				databaseURL: "https://ga-jsr-709.firebaseio.com",
// 				projectId: "ga-jsr-709",
// 				storageBucket: "",
// 				messagingSenderId: "788848286036",
// 				appId: "1:788848286036:web:a6c0a42235594b54"
// 			};
// 			getEvents((events) => {
//       this.setState({events})
//     })
//
// 		firebase.initializeApp(firebaseConfig);
//
// 		let database = firebase.database();
//
// 		this.setState({
// 			database: database
// 		});
//
// 		let wishList = database.ref('wishlist');
//
// 		wishList.on('value', (response) => {
// 			let wishListTable = response.val();
//
// 			let wishListArray = [];
//
// 			for (let item in wishListTable) {
// 				wishListArray.push({
// 					key: item,
// 					item: wishListTable[item]
// 				});
// 			}
//
// 			this.setState({
// 				wishListItems: wishListArray
// 			});
// 		});
// 	}
//
// 	handleChange = (e) => {
// 		this.setState({
// 			value: e.target.value
// 		});
// 	};
//
// 	handleClick = () => {
// 		this.state.database.ref('wishlist').push({
// 			title: this.state.value
// 		});
// 		this.setState({
// 			value: ''
// 		});
// 	};
//
// 	delete = (key) => {
// 		this.state.database.ref('wishlist/' + key).remove();
// 	};
//
// 	update = (e, key, info) => {
// 		this.state.database.ref('wishlist/' + key).update({
// 			title: info
// 		});
//
// 		this.setState({
// 			value: ''
// 		});
// 	};
//
// 	render() {
// 		let wishListItems = this.state.wishListItems.map((item, index) => {
// 			return <ListItem item={item} update={this.update} delete={this.delete} />;
// 		});
// 		return (
// 			<div className="container">
// 				<div className="row justify-content-center">
// 					<div className="col-12">
// 						<h1 className="bg-light m-3 p-3">Wishlist</h1>
// 						<ul className="list-group">{wishListItems}</ul>
// 					</div>
// 					<div className="col-12 m-3 p-3">
// 						<input
// 							type="text"
// 							className="form-control"
// 							value={this.state.value}
// 							onChange={this.handleChange}
// 						/>
// 						<button className="btn btn-primary m-3" onClick={this.handleClick}>
// 							Add Item
// 						</button>
//
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
//
