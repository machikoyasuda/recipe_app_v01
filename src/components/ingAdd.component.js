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
              value={this.props.newIng.name}
              onChange={this.props.newIngHandleInput} />
            <button type="submit">Add</button>
        </form>
      </div>


    )
  }


}
