import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      header : 'This is Fucking Header!',
      count: 0,
      users: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({users:json}))
  }

  render() {
    
    return (
      <div>
        <h1>This is React</h1>
        {/* <Button primary>Click Here</Button> */}
        {this.state.header}<br />
        <button onClick={()=>this.setState({count: this.state.count+1})}>+</button>
        <br />
        {this.state.count}
        <br />
      {this.state.users.map((user,i)=><li key={i}>{user.name}</li>)}
      </div>
    )
  }
}
