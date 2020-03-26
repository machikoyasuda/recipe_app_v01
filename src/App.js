import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar.component";
import RecipeCards from "./components/recipeCards.component";
import Results from "./components/results.component";
import Search from "./components/search.component";


export default class App extends Component{


  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }


render() {
  return(
    <div>
      <Navbar />
      <Search />
      <Results />
      <RecipeCards />
    </div>
  )
};

}


//navbar

//load search component OR results component(w/ recipe cards)








//   componentDidMount() {
//
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(res => res.json())  //convert to json format
//       .then(json => { //take json and setstate
//         this.setState({ //not only gets data from api, but saves it so we can reuse
//           isLoaded: true,  //WHILE LOADING, DO SOMETHING.
//           items: json
//         })
//       })
//       .then(console.log(this.state.items))
//       .then(ifCompleted())
//
//   }
//
//   ifCompleted(completed) {
//     var items = this.state.items
//     for
//
//     ///// lOOP THROUGH COMPLETED. IF COMPLETED ADD TO VAR ABOVE. USE THIS TO MAP
//     if this.state.items.completed
//   }
//
//   render() {
//
//     var { isLoaded, items } = this.state; //accesses state items w/o calling this.state every time
//
//     if (!isLoaded) {  //WHILE LOADING, DO SOMETHING
//       return <div>...loading...</div>
//     } else {
//
//     return (
//       <div className="App">
//         <header className="App-header">
//
//         </header>
//         <ul>
//           {items.map(item => {
//             return (this.item.complete ?
//               (
//               <li className="completed" key={item.id}>
//                 {item.title} | {item.completed}
//               </li>
//             )
//             :
//               (
//               <li key={item.id}>
//                 {item.title} | {item.completed}
//               </li>
//             ))
//           }
//         )}
//         </ul>
//       </div>
//     );
//   }}
// }
