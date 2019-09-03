import React from 'react';
import App from './App';
import About from './About';
import Profile from './Profile';
import Products from './Component/Products';

// import router components
import { BrowserRouter, Route, Link} from 'react-router-dom';

// {this.state.data.mockblog && this.state.data.mockblog.map((post, index) => {
//   return <Link key={generateKey(index)} to={`/${stripWhiteSpace(post.title)}`}>{post.title}</Link>;
// })}
// {this.state.data.mockblog && this.state.data.mockblog.map((post, index)=>{
//   return (<Route key={generateKey(index)} path={`/${stripWhiteSpace(post.title)}`} render={()=>{
//     return <BlogPost content={post} />
//   }}/>
// )
// })}

export default class Router extends React.Component {
  state={

  };

  componentDidMount(){
    fetch('http://demo3965052.mockable.io/blog').then((response) => {
      if (response.status === 200) {
      return response.json();
      } else {
      throw new Error('Something went wrong');
      }
      }).then((data) => {
        this.setState({
          data: data,
        })
      }).catch((error) => {
        console.log(error)
      });
  };

render(){
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/products">Products</Link>

      <Route path="/" component={App} exact />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <Route path="/products" component={Products} />

    </BrowserRouter>

  )
};



}
