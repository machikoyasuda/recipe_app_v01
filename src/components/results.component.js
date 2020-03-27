import React, { Component } from 'react';
import axios from 'axios';
require("dotenv").config(); //so we can have env vars in the dotenv file

export default class Results extends Component{
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }
 //do an "loading" screenm remove it in componentdidmount

 //TODO: setstate loading: true. change to false in componentdidmoint.
 //if loading, render something. else render results
  componentDidMount() {  //lifecycle     axios.get performs an http get req
    axios.get("https://api.spoonacular.com/recipes/findByIngredients",
      { params:
        {ingredients: this.props.ingListQuery,
        apiKey: process.env.API_KEY,
        diet: this.props.diet}
      }
    )
    .then(res => { //use .then bc axios is promise based
      console.log(res); //take results, console.log, setState
      this.setState({results: res.data});
    })
    .catch(err => console.log("error!" + err));
  }

//this.props.ingListQuery = list of ing for query


  render(props) {
    return(
      <div>this is the Results component
        <ul>{this.state.results.map(result => <li key={result.id}>{result.title}</li>)}</ul>
        <button type="button" onClick={this.props.toggleView}>Start over</button>
      </div>
    )
  }
}
