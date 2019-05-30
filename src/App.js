import React, { Component } from 'react';
import axios from 'axios';
import Header from './componant/Header';
import Section from './componant/Section';

import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(props){
		super(props);
		this.state = {
		   response: ''
		};
		this.handleClick = this.handleClick.bind(this);
 }
	
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
  handleClick(e) {
    e.preventDefault();
	
	axios.get('/tmp',{params : {name:'vijay sir', age:'18'}})
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
	  
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <p className="App-intro">
          <a href="javascript:;" onClick={this.handleClick}>{this.state.response}</a>
        </p>
      </div>
    );
  }
}

export default App;
