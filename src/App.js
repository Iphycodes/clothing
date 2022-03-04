import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Cardlist } from './cardlist/cardlist.component';
import { Search } from './search/search.component';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: []
  }
}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange(){
    console.log('change')
  }
  
  render(){

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })


    return  (
      <div className="App">
        <Search 
        placeholder="Search for an item" 
        handleChange={e => this.setState({searchField: e.target.value})}
        />
        <Cardlist monsters={filteredMonsters}/>
      </div>
      
    ) 
  }
  
}
    

export default App;
