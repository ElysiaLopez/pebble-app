import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Link} from "react-router-dom";

class SubmitPage extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {

    };
  }
  render()
  {
    return (
      <div>
      <h3 className="center"> Today's Prompt: </h3>
      <h1 className="heading center"> What would you do if your crush confessed to your best friend on Valentine’s Day? </h1>
      <textarea className="center" rows="4" cols="50" onFocus={this.value=''}>
      start typing...
      </textarea>
      <br/>
      <Link to="/homepage">
        <button className="center button-1" onClick={this.props.onSubmit}> Throw in Your Pebble </button>
      </Link>
    </div>);
  }
}

export default SubmitPage;