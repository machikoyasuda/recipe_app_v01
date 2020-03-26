import React, { Component } from 'react';
import axios from 'axios';
require("dotenv").config();

export default class Results extends Component{
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  componentDidMount() {  //lifecycle     axios.get performs an http get req
    axios.get("https://api.spoonacular.com/recipes/findByIngredients",
      { params:
        {ingredients: 'spinach',
        diet: "vegan",
        maxReadyTime: 20}}
    )
    .then(res => { //use .then bc axios is promise based
      console.log(res); //take results, console.log, setState
      this.setState({results: res.data});
    })
    .catch(err => console.log("error!" + err));
  }


  render() {
    return(
      <div>this is the Results component
        <ul>{this.state.results.map(result => <li key={result.id}>{result.title}</li>)}</ul>
      </div>
    )
  }
}
