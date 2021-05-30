
import './App.css';
import React from 'react'
import {Table, User} from './components/Table'


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

  render() {
    return (
      <div className="App">
        <Table users={this.state.users} handlerRemoveUser={this.removeUser}/>
      </div>)
  }
}
export default App;
