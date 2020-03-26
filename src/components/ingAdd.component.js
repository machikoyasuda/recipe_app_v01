import React, { Component } from 'react';

export default class IngAdd extends Component{

  render() {
    return(
      <div>lets search
        <form onSubmit={this.props.addIng}>
          <label>Add an ingredient to the list:</label>
            <input
              type="text"
              placeholder="add ingredient"
              value={this.props.newIngHandleInput}
              onChange={this.props.addIng} />
            <button type="submit">Add</button>
          {/*onClick goes to final screen*/}
          <button onClick={this.props.next}>Next</button>
        </form>
      </div>


    )
  }


}
