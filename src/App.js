import React, { Component } from 'react';
import CardList from './components/CardList';
import { robots } from './robots';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Footer from './components/Footer';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {this.setState({ robots: users})});
    
  }
  
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render(){
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
  return(
         <div className="tc">
           <h1 className="f1">ROBOFRIENDS</h1>

         
          <SearchBox searchChange= {this.onSearchChange}/>
          <Scroll>
           <CardList robots={filteredRobots}/>
           </Scroll> 
           <Footer />
         </div>   
  );
 }

}


export default App;

// state, which is "robots", is now passed down as "props" so "CardList", //children accepts "robots" as "props" even though in the app.js it's a //"state". 
// "App" now owns "state" that includes "robots" it's allowed to change it. //Now the way they can  communicate, we have these two valleys, and ideally in the search box I have something

//called "onSearchChange()", which again is a function that I'm just going //to make up
//And "onSearchChange()" I want to say that every time the input changes, just like we did with DOM manipulation,
