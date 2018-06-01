import React, { Component } from 'react';
import './App.css';
import mydata from './test.json';
import MyComponent from './MyComponent';

class App extends Component { 
  constructor(props) {
    super(props); 
   } 
   state = 
    { 
	filmList: [] 
     };
  
  handleFilm = () => {
    const temp = mydata.map((mydata) => <li>{mydata.id} - {mydata.title} - {mydata.filmdirector}</li>);
    this.setState({filmList: temp});
  }

  render() { 
  
  return (
  <div className="App">
      <MyComponent/>
      
      <button onClick={this.handleFilm}> PRESS ME! </button>
      
      <ul>
      {this.state.filmList}
      </ul>
     
  </div>
    );
  }
}
export default App;