import React from 'react';
import { Loading } from './Loading';
import { User as UserList, UserProps} from './User';

const User:React.FC<{name?:string}> = ({name}) => {
  if(!name){
    return null;
  }
  return (
  <div>
    <h1>{name}</h1>
  </div>
  )
}

class App extends React.Component {
  state = {
    isUserLoggin: false,
    age: 88,
    loading: true,
    isError: false,
    users:[
      {
        name:'Luis',
        age:'19',
        color:'#fff'
      },
      {
        name:'Jennifer',
        age:'19',
        color:'#fff'
      },
      {
        name:'Andres',
        age:'19',
        color:'#fff'
      },
      {
        name:'Jennifer',
        age:'19',
        color:'#fff'
      },
      {
        name:'Diego',
        age:'19',
        color:'#fff'
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000);

  }
  
  addUser(user:UserProps){
    this.setState({users:[...this.state.users, user]})
  }

  render() {
    const ageMessage = this.state.age > 50 ? `ciudadano de oro` : `adulto joven`;
    const { loading, isError, users } = this.state;
    const filteredUsers = users.filter(user => user.name !== 'Jennifer');
    return (
      <div className="container">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : isError ? (
          <div>
            <p>Ups! Algo salio mal</p>

          </div>
        ) :
          <div>
            <p>Bienvenid@ a nuestro app</p>
            <p>Tipo {ageMessage}</p>
            <User name='andrea'/>
          </div>}
        <div>
          {filteredUsers.map((user, index) => <UserList key={index} {...user} />)}
        </div>
          <button onClick={() => this.addUser({name:'Jennifer', age:'30', color:'#333'})}>Add user!</button> 
      </div>
    );
  }

}

export default App;