import React, { Component } from 'react';
import axios from 'axios';
require("dotenv").config(); //so we can have env vars in the dotenv file

export default class Results extends Component{
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      resultsLoaded: false, //becomes true when page is ready to display results
    }

    this.resultsLoadedHandler = this.resultsLoadedHandler.bind(this);
  }
 //do an "loading" screenm remove it in componentdidmount

 //TODO: setstate loading: true. change to false in componentdidmount.
 //if loading, render something. else render results

  componentDidMount() {  //lifecycle     axios.get performs an http get req
    const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const queryDiet = (this.props.diet === "" ? "" : `&diet=${this.props.diet}`)
    const queryString = //`https://api.spoonacular.com/recipes
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${this.props.ingListQuery}${queryDiet}`
    axios.get(queryString,)
    .then(res => { //use .then bc axios is promise based
      console.log(queryString + " : " + res); //take results, console.log, setState
      this.setState({results: res.data})
    })
      .then(this.resultsLoadedHandler()
        // console.log(`props.resultsLoading: ${this.props.resultsLoading}`)
      )

    .catch(err => console.log("error!" + err));
  }


  // .then(res => res.json()) //use .then bc axios is promise based
  //   .then(json => {
  //     this.setState({results: json})})
  //     .then(console.log(`this.state.results: ${this.state.results}`))
  //       .then(this.resultsLoadedHandler()
  //     // console.log(`props.resultsLoading: ${this.props.resultsLoading}`)
  //   )




//this.props.ingListQuery = list of ing for query

resultsLoadedHandler() {
  this.setState({resultsLoaded: true}, () => {
    console.log(`resultsLoaded: ${this.state.resultsLoaded}. `)
  })
}


  render(props) {
    return(
      <div>
      {!this.state.resultsLoaded ?
        <div style={{backgroundColor: "powderblue"}}>
          <h2>loading your recipes........</h2>
        </div>
       :
        <div>
          <ul>{this.state.results.map(result => <li key={result.id}>{result.title}</li>)}</ul>
          <button type="button" onClick={this.props.toggleView}>Start over</button>
        </div>
      }
      </div>
    )

  }
}
