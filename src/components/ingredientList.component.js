import React, { Component } from 'react';

export default class IngSearch extends Component{

  render() {
    return(
      <div>lets search
        <form onSubmit={this.onSubmit}>
          <label>What ingredients do you have lying around that you'd like to use?</label>
          {/*onClick goes to final screen*/}
          <IngSearch />
          <button onClick={this.Next}>Next</button>
        </form>
      </div>


    )
  }


}
