import React, { Component } from 'react';

export default class IngList extends Component{
  constructor(props){
    super(props)

    this.createList.bind(this);
  }

//this formats all the ingredients passed as props
  createList(ing) {
    return(
      <li key={ing.key}>
        <p>{ing.name}</p>
        <button type="button" onClick={() => this.props.deleteIng(ing.key)}>delete</button>
      </li>
    )
  }

  render(props) {
    const ingList = this.props.ingList
    {/*create a list we can use*/}
    const mappedIngs = ingList.map(ing => this.createList(ing))
    {/*run each item through function above*/}
    return(
    //return below
      <div>
        <form>
          <label>You are searching for recipes with:</label>
          {/*onClick goes to final screen*/}
            <ul className="mappedIngs">{mappedIngs}</ul>
          <button onClick={this.props.next}>Next</button>
        </form>
      </div>


    )
  }


}
