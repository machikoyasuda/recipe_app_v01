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
    <button onClickAll={props.onClickAll}>al</button>
    <button onClick={props.onClickSome}>some</button>
    <h3>of the ingredients listed</h3>
  </div>
)

//comes after diet screen. inc back and next buttons. like a to do list component.
export default class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      chooseDietScreen: true,
      ingScreen: false,
      finalScreen: false,
      diet: "",
      newIng: "",
      ingList: []
    }

  this.backToIngScreen = this.backToIngScreen.bind(this);
  this.backToDietScreen = this.backToDietScreen.bind(this);
  this.goBack = this.goBack.bind(this);
  this.next = this.next.bind(this);
  this.onClickAll = this.onClickAll.bind(this);
  this.onClickSome = this.onClickSome.bind(this);
  this.onClickDiet = this.onClickDiet.bind(this);
  this.addIng = this.addIng.bind(this);
  this.newIngHandleInput = this.newIngHandleInput.bind(this);

  }
//when you choose a diet you move to the search screen
onClickDiet(e){
  console.log(e.target.value)
  this.setState({
    diet: e.target.value, chooseDietScreen: false
 }, () => console.log(this.state.diet))
}

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
next(e) { //set state of ing, of finalScreen
  this.setState({finalScreen: true, ingScreen: false})
}

onClickAll(e){
 console.log("onclickall")
}

onClickSome(e){
  console.log("onclicksome")
}

//adds new ing to list, resets newIng state
addIng(e){
  const newIng = this.state.newIng
  const ingList = [...this.state.Ing, newIng]
  this.setState({ingList: ingList, newIng: ""})
}

//as someone types, newIng updates
newIngHandleInput(e) {
  this.setState({newIng: e.target.value})
}

//for dietary buttons
//onclick - if not in state.diets, add. add "clicked" to classname (with new css)
//if in state.diets, remove. remove "clicked" from classname (with orig css)




  render() {
    return(
      <div>this is the Search component
      {/*each screen is only based on chooseDietScreen, functions change state*/}
        {this.state.chooseDietScreen && <PickDiet onClick={this.onClickDiet} />}
        {this.state.ingScreen &&
          <IngAdd addIng={this.addIng}
          newIngHandleInput={this.newIngHandleInput}
          next={this.next} />
          <IngList />}
        {/*button is only showed if chooseDietScreen is false*/}
        {!this.state.chooseDietScreen && <button onClick={this.goBack}>Go Back</button>}
        {/*show final screen with 2 click functions*/}
        {this.state.finalScreen &&
          <IncWhichIngredients
          onClickAll={this.onClickAll}
          onClickSome={this.onClickSome} />}

      </div>


    )
  }
}
