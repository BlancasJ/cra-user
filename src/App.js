import React, { Component } from 'react'
import User from './components/User'
import './App.css';

const AVATAR1 = 'https://th.bing.com/th/id/Rd89580c222d7e2e7b13905a9aa4ba247?rik=EOwYlKGUO0UkeA&pid=ImgRaw';

const AVATAR2 = 'https://th.bing.com/th/id/R3eee88749086262e19dafdd04d2ac848?rik=2XYAcS5gwjbUKg&pid=ImgRaw';

const users = [ 
  {
    id:1,
    name: 'Jorge Blancas', 
    description: 'JavaScript Associate', 
    age: 22, 
    avatar: AVATAR1,
    hobbies: [{name: 'Read', description: 'Manga and light novels', isActive: true }]
  },
  {
    id:2,
    name: 'Aldo Mex', 
    description: 'Embedded System', 
    age: 23, 
    avatar: AVATAR2,
    hobbies: [{name: 'Soccer', description: 'Some Description', isActive: true }],
  },
];

function Avatar( {url} ) {
  return <img src={url} className='avatar' alt='user avatar'/>;
}



export default class App extends Component {
  render() {
    return (
      <div className="container">
        {users.map( (user) => {
          return <User
            key={user.id}
            name = {user.name}
            desciption = {user.description}
            age = {user.age}
            Avatar ={ <Avatar url={user.avatar} />}
            hobbies={user.hobbies}
          />
        })}
      </div>
    );
  }
}
