import React from 'react'
export default class Events extends React.Component {
  state={
    Username:""
  }
  handleClick=()=>{
    console.log(this.state.Username)
    this.setState({
      Username:""
    })
  }
  handleUser=(e)=>{
   this.setState({
    [e.target.name]:e.target.value
   })
  }
  render() {
    return (
      <div>
        <h1>This is About Events</h1>
        <p><input 
              value={this.state.Username}
              name="Username"
              text="type"
              placeholder="Enter your name"
              onChange={this.handleUser}/></p>
        <button onClick={this.handleClick}>Submit</button>
        </div>
    )
  }
}

