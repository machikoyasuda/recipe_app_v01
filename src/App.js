import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar.component";
import Results from "./components/results.component";
import Search from "./components/search.component";


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      resultsVisible: false, //are we showing the results page?
      //----------------------------------
      newIng: {key: "", name: ""}, //updates as user types new ingredient
      ingList: [], //updates when user presses "add", adds ingredient to list
      ingListString: "", //creates clean str for display when user clicks "next" on ing add page
      ingListQuery: "", //creates a list to use for the query, on results page
      diet: "", //veg, vegan, GF, etc..
      //TODO: edit so diet can be null, not input in query string
      chooseDietScreen: true,
      ingScreen: false,
      finalScreen: false
    }

    this.toggleView = this.toggleView.bind(this); //toggles btwn search and results components
    //-----------------------------------
    this.onClickDiet = this.onClickDiet.bind(this); //selects diet for this.state.diet
    this.addIng = this.addIng.bind(this); //add ingredient to ingredient list
    this.deleteIng = this.deleteIng.bind(this); //deletes ingredient that was added to ing list
    this.newIngHandleInput = this.newIngHandleInput.bind(this); //handles as user types new ing
    this.ingString = this.ingString.bind(this); //turns ing list to a str
    this.ingListQuery = this.ingListQuery.bind(this); //turns ing list to a str for query search
    this.backToIngScreen = this.backToIngScreen.bind(this);
    this.backToDietScreen = this.backToDietScreen.bind(this);
    this.goBack = this.goBack.bind(this);
    this.next = this.next.bind(this);
    this.onClickAll = this.onClickAll.bind(this);
    this.onClickSome = this.onClickSome.bind(this);
  }

  toggleView = () => {
    this.setState({isLoaded: !this.state.isLoaded, resultsVisible: !this.state.resultsVisible})
    //TODO: search visible? results visible? handle onlick last page of search components
    //show a loading screen on results
  }


//======================================================

//adds new ing to list, resets newIng state
addIng(e){
  e.preventDefault();
  const newIng = this.state.newIng
  if (newIng.name !== '') { //if there is an input..
    const ingList = [...this.state.ingList, newIng] //add to list..
    this.setState({ //set list state and restart
      ingList: ingList,
      newIng: {name: "", key: ""}
    })
}}

//as someone types, newIng updates
newIngHandleInput(e) {
  this.setState({
    newIng: {key: Date.now(), name: e.target.value}
  }, () => console.log(`newIng: ${this.state.newIng.name} and key: ${this.state.newIng.key}`))
}

deleteIng = key => {
  console.log("deleteIng clicked, ingList = " + this.state.ingList)
  const newList = this.state.ingList
  console.log("newList: " + newList)
  const filteredList = newList.filter(ing => ing.key !== key)
  console.log("filteredList : " + filteredList)
  this.setState({ingList: filteredList});
} //takes list, filters so it only shows ing without those keys, resets state

ingString() {
  const ingList = this.state.ingList.map(item => item.name)
  console.log(`ingString ingList is : ${ingList}`)
  const ingListString = ingList.join(", ")
  console.log(ingListString + " : ingListString")
  this.setState({ingListString: ingListString},
    () => { console.log(this.state.ingListString + " : this.state.ingListString")})
}

//when you choose a diet you move to the search screen
onClickDiet(e){
  console.log(e.target.value)
  this.setState({
    diet: e.target.value, chooseDietScreen: false, ingScreen: true
 }, () => console.log(`your diet is: ${this.state.diet}. ingScreen: ${this.state.ingScreen}`))
}



//=======================================================


//if you go back you go to the diet screen
goBack(e){ //if on final screen, go back to ing screen. else, go back to diet screen
  this.state.finalScreen ? this.backToIngScreen() : this.backToDietScreen()
  console.log(e.target.value)
}

//part of goBack
backToIngScreen(){ //goes from final to ingScreen
  this.setState({ingScreen: true, finalScreen: false})
}

//part of goBack
backToDietScreen(){ //from ing screen to diet screen
  this.setState({diet: "", ingScreen: false, chooseDietScreen: true})
}

//when you click the next button, we go to the final screen
next(e) { //set state of ing, of finalScreen, turn list to string
  this.setState({finalScreen: true, ingScreen: false}, () => {this.ingString()})
}

onClickAll(e){
 console.log("onclickall")
 this.toggleView()
 this.ingListQuery()
 console.log("toggleView called")
 console.log(`ingListQuery is ${this.state.ingListQuery}` )
 //call toggleView, changes the page on app.js
}

onClickSome(e){
  console.log("onclicksome")
  this.toggleView()
  this.ingListQuery()
  console.log("toggleView called")
  console.log(`ingListQuery is ${this.state.ingListQuery}` )
  //call toggleView, changes the page on app.js
}





//=======================================================

ingListQuery() {
  const list = this.state.ingList.map(item => item.name)
  const queryList = list.join(",+")
  this.setState({ingListQuery: queryList})
  //separates ingredients with ",+", required for query by spoonacular
}

render() {
  return(
    <div>
      <Navbar />
      {/*show either search or results*/}
      {!this.state.resultsVisible ?
        <Search toggleView={this.toggleView}
        onClickDiet={this.onClickDiet}
        // diet={this.state.diet}
        newIng = {this.state.newIng}
        ingList = {this.state.ingList}
        ingListString = {this.state.ingListString}
        addIng = {this.addIng}
        newIngHandleInput = {this.newIngHandleInput}
        deleteIng = {this.deleteIng}
        ingString = {this.ingString}
        chooseDietScreen = {this.state.chooseDietScreen}
        ingScreen = {this.state.ingScreen}
        finalScreen = {this.state.finalScreen}
        backToIngScreen = {this.backToIngScreen}
        backToDietScreen = {this.backToDietScreen}
        goBack = {this.goBack}
        next = {this.next}
        onClickAll = {this.onClickAll}
        onClickSome = {this.onClickSome}/>
         :
        <Results toggleView={this.toggleView}
        ingListQuery = {this.state.ingListQuery}
        diet = {this.state.diet}
        />}
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
