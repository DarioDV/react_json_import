import React, { Component } from 'react';
import './App.css';
import mydata from './test.json';
import pippo from './MyComponent';

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
      <header className="App-header">
      <h1>Welcome to the movie list <br/> which comes from a JSON file </h1>
      </header>
      <pippo/>
      <br/>
      <button onClick={this.handleFilm}> PRESS ME! </button>
      <ul>
      {this.state.filmList}
      </ul>
     
  </div>
    );
  }
}
export default App;