import React from 'react';

export default class Products extends React.Component{
  state = {

  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,

      })
    };

handleClick = () => {
  fetch(this.state.url)
    .then(response => {
        return response.json();
    })
    .then(data => {
      console.log(data);
      this.setState({
        photos: data.photos.photo,
      })
    });
  };

    render(){
      return(
        <div>
          <input onChange={this.handleChange}></input>
  				<button onClick={this.handleClick}>Click Me</button>
        </div>
      )
    }
}
