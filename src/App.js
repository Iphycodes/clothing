import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Cardlist } from './cardlist/cardlist.component';
import { Search } from './search/search.component';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: "Frankein",
          email: "oshnabh@gmail.com"
        },
        {
          name: "Jowuifhn",
          email: "josueoj@gmail.com"
        },
        {
          name: "Sammy",
          email: "sammysam@gmail.com"
        },
        {
          name: "Joels",
          email: "joes@gmail.com"
        }
        ,
        {
          name: "marting",
          email: "matyysam@gmail.com"
        },
        {
          name: "musty",
          email: "musty@gmail.com"
        },
        {
          name: "sanusi",
          email: "sanysam@gmail.com"
        },
        {
          name: "emeka",
          email: "emeka@gmail.com"
        },
        {
          name: "fissh",
          email: "dsioa@gmail.com"
        },
        {
          name: "opdsu",
          email: "fusty@gmail.com"
        },
        {
          name: "jospey",
          email: "saasia@gmail.com"
        },
        {
          name: "rish",
          email: "emeasa@gmail.com"
        }
      ],
      searchField: ''
    }
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({monsters: users}))
  // }

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
        placeholder="Search item" 
        handleChange={e => this.setState({searchField: e.target.value})}
        />
        <Cardlist monsters={filteredMonsters}/>
      </div>
      
    ) 
  }
  
}
    

export default App;
