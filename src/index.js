import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './SubmitPage'
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

 import SubmitPage from './SubmitPage';
import FeedPage from './FeedPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmitPage />} />
        <Route path="homepage" element={<FeedPage respondedUsers={usersData} promptID={promptID} prompt={prompts[promptID]}/>} />
      </Routes>
    </Router>
  );
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

usersData[0].responses[0] = "tell my friend to reject them";
usersData[1].responses[0] = "I'd probably just try to move on with my life. There are many fish in the sea."
usersData[2].responses[0] = "honestly? I'd tell my friend to reject them or I'd be mad."
usersData[3].responses[0] = "i will wish the best for them and cry alone in the corner of my room and do leetcode until I fall asleep knowing that I can never forget about her because she is my my exception."
usersData[4].responses[0] = "I will punch my friend and never hang out with them again because it's just too socially awkward and i can't deal with situations like that I just can't it's not something I can even imagine."
usersData[5].responses[0] = "I'd probably act happy for my best friend and then secretly try to sabatoge their relationship.";
usersData[6].responses[0] = "I'd try to journal my feelings about it and not be too mad at my friend. It's not their fault."
usersData[7].responses[0] = "idk";
usersData[8].responses[0] = "move to China and never show my face here again";

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