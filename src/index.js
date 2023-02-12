import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { BrowserRouter} from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
// import heart from './heart.png'
// import { render } from '@testing-library/react';

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

 import {Link} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmitPage />} />
        <Route path="homepage" element={<HomePage respondedUsers={usersData} promptID={promptID} prompt={prompts[promptID]}/>} />
      </Routes>
    </Router>
  );
}

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
      <button className="center button-1" onClick={this.props.onSubmit}> Throw in Your Pebble </button>
      <Link to="/homepage">Go to homepage</Link>
    </div>);
  }
}

class HomePage extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state =
    {
      respondedUsers: this.props.respondedUsers,
      promptID: this.props.promptID,
      prompt: this.props.prompt,
      cardSelected: false
    }
  }
  render()
  {
    //return <h1 className="heading center">Prompt: {this.state.prompt}</h1>;
    return (
    <div className="center" style={{width: '1000px'}}>
        <h1 className="heading center">Prompt: {this.state.prompt}</h1>
          {
            this.state.respondedUsers.map(user => 
            <Card username={user.username} response={user.responses[0]} onClick={() => {
              this.setState({cardSelected: !this.state.cardSelected});
              }}/>)
          }
      </div>);
  }
}

class User
{
  constructor(username, id)
  {
    this.username = username;
    this.responses = new Map();
    this.ID = id;
  }

  addResponse(questionID, response)
  {
    this.responses.set(questionID, response);
  }

  getResponse(questionID)
  {
    return this.responses[questionID];
  }
}

class Profile extends React.Component
{
  render()
  {
    return(<div>
      <h1>Profile:</h1>
      <TextField text="Name: "/>
      <DropDownMenu options={["Freshman", "Sophomore", "Junior", "Senior"]}/>
      
    </div>);
  }

}

class Card extends React.Component
{
  render()
  {
    return (
      <div className="card" style={{ width: '250px' }} onClick={this.props.onClick()}>
        <div className="container">
          <h4><b>{this.props.username}</b></h4>
          <p>{this.props.response}</p>
        </div>    
      </div>
    );
  }
}

class Dimmer extends React.Component
{
  render()
  {
    return <div className="dimmer" style={{opacity: '0.5'}}/>
  }
}

class TextField extends React.Component{
  render()
  {
    return(<div>
      <label>{this.props.text}</label>
      <input type="text" id="textbox" name="textbox" />
    </div>);
  }
}

function DropDownMenu({options}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose an option:</label>
      <select id="dropdown" name="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

let promptsData = [
  "What would you do if your crush confessed to your best friend on Valentine's Day?",
  ""
];

let prompts = new Map();

for(let i = 0; i < promptsData.length; i++)
{
  prompts[i] = promptsData[i];
}

let usersData = [
  new User("purple-python", 124),
  new User("blue-bear", 8987),
  new User("happy-hippo", 684),
  new User("green-gecko", 10984),
  new User("tacky-tortoise", 6755),
  new User("lucky-lion", 121),
  new User("fierce-frog", 3325),
  new User("quick-quokka", 8913),
  new User("precious-panther", 94899)
];

let promptID = 0;

for(let i = 0; i < usersData.length; i++)
{
  usersData[i].responses[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
}

usersData[5].responses[0] = "I'd probably act happy for my best friend and then secretly try to sabatoge their relationship.";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
    //<HomePage respondedUsers={usersData} promptID={promptID} prompt={prompts[promptID]}/>
    //<SubmitPage onSubmit={() => renderHomePage()}/>
);

// function renderHomePage()
// {
//   root.render(
//     <HomePage respondedUsers={usersData} promptID={promptID} prompt={prompts[promptID]}/>
//   );
// }

// ReactDOM.render(
//   <HomePage respondedUsers={usersData} promptID={promptID} prompt={prompts[promptID]}/>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();