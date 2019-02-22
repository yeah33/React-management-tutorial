import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' :1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '아무개',
  'birthday' : '970330',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id' :2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '940330',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id' :3,
  'image' :'https://placeimg.com/64/64/3',
  'name' : '어저구',
  'birthday' : '940330',
  'gender' : '여자',
  'job' : '대학생'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            )
          })
        }
      </div>
    );
  }
}


export default App;
