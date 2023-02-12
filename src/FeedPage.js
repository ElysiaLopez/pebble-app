import React, {useState} from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      selected : false
    };
  }

  render()
  {
    return (
      <div className="card" style={this.state.selected ? {width : '250px' } : { width: '250px' }} onClick={this.props.onClick()}>
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

class FeedPage extends React.Component
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
    <div className="center" style={{width: '1300px'}}>
        <h1 className="heading center">Prompt: {this.state.prompt}</h1>
          {
            this.state.respondedUsers.map(user => 
            <Card username={user.username} response={user.responses[0]} onClick={() => {
              this.setState({cardSelected: !this.state.cardSelected});
              }}/>)
          }
        
        <button className="button-1 center">Choose this pebble</button>
        <div style={{height: '50px'}}></div>
      </div>);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }
}

export default FeedPage;