import React, { Component } from 'react';
import axios from 'axios';
import IngList from "./ingList.component";
import IngAdd from "./ingAdd.component";

//this screen comes up first. users can choose one diet, then auto goes to ing screen
const PickDiet = props => (
  <form className="form-group diet">
    <label>Select a diet:</label>
    <input type="button" id="omnivore" value="Omnivore" onClick={props.onClickDietNull} className="diet-btn " />
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
    <h3>Make sure my results include</h3>
    <button onClick={props.onClickAll}>all</button>
    <button onClick={props.onClickSome}>some</button>
    <h3>of the ingredients listed</h3>
    <p>{props.ingListString}</p>
  </div>
)

//comes after diet screen. inc back and next buttons. like a to do list component.
export default class Search extends Component{

  render() {
    return(
      <div>this is the Search component
      {/*each screen is only based on chooseDietScreen, ingScreen, finalScreen,
        functions change state*/}
        {/*if first screen, PickDiet displayed*/}
        {this.props.chooseDietScreen && <PickDiet
          onClick={this.props.onClickDiet}
          onClickDietNull={this.props.onClickDietNull} />}
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
