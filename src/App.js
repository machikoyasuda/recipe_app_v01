import React, { Component } from 'react';
import './App.css';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usedIngredients: [],
      unusedIngredients: [],
      queryIngredients: "", //word,+word,+word,+
      loading: true
    };

    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }


  async componentDidMount() {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.queryIngredients}&apiKey=d8e412b1f6d94b408526f35e65f4d432`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  };

  mySubmitHandler = e => {
    var queryUnedited = e.target.value;
    var queryEdited = queryUnedited.replace(' ', '');
    console.log(`query unedited is ${queryUnedited} \n queryEdited is ${queryEdited}`)
    this.setState({queryIngredients: queryEdited, loading: false})
  };

  // fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.queryIngredients}&apiKey=d8e412b1f6d94b408526f35e65f4d432`)
  //   .then(results => {
  //     return results.json();
  //   }).then(data => {
  //     let recipes = data.results.map((item) => {
  //       return(
  //         <div key={item.id}>
  //           <h1>{item.title}</h1>
  //           <img src={item.image}>
  //           <h3>You'll use {item.}</h3>
        // )
      // })
    // })
  // }

  render() {
  return (
    <div className="App">
      {this.state.loading ? <div>...loading</div> : <div>recipe</div>}
      <form onSubmit={this.mySubmitHandler}>
        <h4>Search for items here, separated by commas: </h4>
        <input type="text"/>
        <input type="submit"/>
      </form>
    </div>
  )
};
};


export default Search;
