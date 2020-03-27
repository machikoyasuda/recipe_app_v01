import React, { Component } from 'react';
import axios from 'axios';
import IngList from "./ingList.component";
import IngAdd from "./ingAdd.component";

//this screen comes up first. users can choose one diet, then auto goes to ing screen
const PickDiet = props => (
  <form className="form-group diet">
    <label>Select a diet:</label>
    <input type="button" id="omnivore" value="Omnivore" onClick={props.onClick} className="diet-btn " />
    <input type="button" id="glutenfree" value="Gluten Free" onClick={props.onClick} className="diet-btn " />
    <input type="button" id="vegetarian" value="Vegetarian" onClick={props.onClick} className="diet-btn " />
    <input type="button" id="vegan" value="Vegan" onClick={props.onClick} className="diet-btn " />
    <input type="button" id="pescatarian" value="Pescatarian" onClick={props.onClick} className="diet-btn " />
    <input type="button" id="paleo" value="Paleo" onClick={props.onClick} className="diet-btn " />
  </form>
)


//comes last. can choose if they want to inc all ing or just some of the ones listed
const IncWhichIngredients = props => (

  <div>
    <h3>Find recipes that include</h3>
    <button onClick={props.onClickAll}>all</button>
    <button onClick={props.onClickSome}>some</button>
    <h3>of the ingredients listed</h3>
    <p>{props.ingListString}</p>
  </div>
)

//comes after diet screen. inc back and next buttons. like a to do list component.
export default class Search extends Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     // chooseDietScreen: true,
  //     // ingScreen: false,
  //     // finalScreen: false,
  //     // diet: "",
  //     // newIng: {key: "", name: ""},
  //     // ingList: [],
  //     // ingListString: ""
  //   }

  // this.backToIngScreen = this.backToIngScreen.bind(this);
  // this.backToDietScreen = this.backToDietScreen.bind(this);
  // this.goBack = this.goBack.bind(this);
  // this.next = this.next.bind(this);
  // this.onClickAll = this.onClickAll.bind(this);
  // this.onClickSome = this.onClickSome.bind(this);
  // this.onClickDiet = this.onClickDiet.bind(this);
  // this.deleteIng = this.deleteIng.bind(this);
  // this.addIng = this.addIng.bind(this);
  // this.newIngHandleInput = this.newIngHandleInput.bind(this);
  // this.ingString = this.ingString.bind(this);

  // }
// //when you choose a diet you move to the search screen
// onClickDiet(e){
//   console.log(e.target.value)
//   this.setState({
//     diet: e.target.value, chooseDietScreen: false, ingScreen: true
//  }, () => console.log(`your diet is: ${this.state.diet}. ingScreen: ${this.state.ingScreen}`))
// }

// //if you go back you go to the diet screen
// goBack(e){ //if on final screen, go back to ing screen. else, go back to diet screen
//   this.state.finalScreen ? this.backToIngScreen() : this.backToDietScreen()
//   console.log(e.target.value)
// }
//
// //part of goBack
// backToIngScreen(){ //goes from final to ingScreen
//   this.setState({ingScreen: true, finalScreen: false})
// }
//
// //part of goBack
// backToDietScreen(){ //from ing screen to diet screen
//   this.setState({diet: "", ingScreen: false, chooseDietScreen: true})
// }
//
// //when you click the next button, we go to the final screen
// next(e) { //set state of ing, of finalScreen, turn list to string
//   this.setState({finalScreen: true, ingScreen: false}, () => {this.props.ingString()})
// }
//
// onClickAll(e, props){
//  console.log("onclickall")
//  this.props.toggleView()
//  console.log("toggleView called")
//  //call toggleView, changes the page on app.js
// }
//
// onClickSome(e, props){
//   console.log("onclicksome")
//   this.props.toggleView()
//   console.log("toggleView called")
//   //call toggleView, changes the page on app.js
// }

// //adds new ing to list, resets newIng state
// addIng(e){
//   e.preventDefault();
//   const newIng = this.state.newIng
//   if (newIng.name !== '') { //if there is an input..
//     const ingList = [...this.state.ingList, newIng] //add to list..
//     this.setState({ //set list state and restart
//       ingList: ingList,
//       newIng: {name: "", key: ""}
//     })
// }}
//
// //as someone types, newIng updates
// newIngHandleInput(e) {
//   this.setState({
//     newIng: {key: Date.now(), name: e.target.value}
//   }, () => console.log(`newIng: ${this.state.newIng.name} and key: ${this.state.newIng.key}`))
// }
//
// deleteIng = key => {
//   console.log("deleteIng clicked, ingList = " + this.state.ingList)
//   const newList = this.state.ingList
//   console.log("newList: " + newList)
//   const filteredList = newList.filter(ing => ing.key !== key)
//   console.log("filteredList : " + filteredList)
//   this.setState({ingList: filteredList});
// } //takes list, filters so it only shows ing without those keys, resets state
//
// ingString() {
//   const ingList = this.state.ingList.map(item => item.name)
//   console.log(`ingString ingList is : ${ingList}`)
//   const ingListString = ingList.join(", ")
//   console.log(ingListString + " : ingListString")
//   this.setState({ingListString: ingListString},
//     () => { console.log(this.state.ingListString + " : this.state.ingListString")})
// }




  render() {
    return(
      <div>this is the Search component
      {/*each screen is only based on chooseDietScreen, ingScreen, finalScreen,
        functions change state*/}
        {/*if first screen, PickDiet displayed*/}
        {this.props.chooseDietScreen && <PickDiet onClick={this.props.onClickDiet} />}
        {/*if diet chosen, ingScreen(add form and list) displayed*/}
        {this.props.ingScreen &&
          <div>
            <IngAdd addIng={this.props.addIng}
            newIngHandleInput={this.props.newIngHandleInput}
            newIng={this.props.newIng}
            />
            <IngList ingList={this.props.ingList}
            deleteIng = {this.props.deleteIng}
            next={this.props.next} />
          </div>}
        {/*button is only showed if chooseDietScreen is false*/}
        {!this.props.chooseDietScreen && <button onClick={this.props.goBack}>Go Back</button>}
        {/*show final screen with 2 click functions*/}
        {this.props.finalScreen &&
          <IncWhichIngredients
          onClickAll={this.props.onClickAll}
          onClickSome={this.props.onClickSome}
          ingListString={this.props.ingListString}/>}

      </div>


    )
  }
}
