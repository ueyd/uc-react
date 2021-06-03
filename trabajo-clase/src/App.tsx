
import './App.css';
import React from 'react'
import {Table, User} from './components/Table'
import {Form} from './components/Form'

type MyState = {
  users: User[]
}

class App extends React.Component<{}, MyState> {

  state:MyState = {
    users: [
      {
        name:"nombre1",
        job: "job1"
      },
      {
        name:"nombre2",
        job: "job2"
      },
      {
        name:"nombre3",
        job: "job3"
      }
    ]
  }

  removeUser = (index:any) => {
    const {users} = this.state;
    this.setState({
      users: users.filter((_, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = (user:User) => {
    this.setState(
      {
        users: [...this.state.users, user]
      }
    )
  } 

  render() {
    return (
      <div className="App">
        <Table users={this.state.users} handlerRemoveUser={this.removeUser}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>)
  }
}
export default App;
