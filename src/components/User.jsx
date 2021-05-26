import React, {useState} from 'react'
import { faPlusCircle, faMinusCircle, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hobbie from './Hobbie'

function User( {name, desciption, age, Avatar, hobbies } ) {

  const [toggleHobbies, setToggleHobbies] = useState(false);
  let [counterg, setCounterg] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const showHobbies = () => {
    setToggleHobbies(!toggleHobbies);
  }

  const count = (hobbies) => {
    const counter = hobbies.reduce( (counter, element) => {
      return element.isActive ? counter+1 : counter+0;
    }, 0);
    setCounterg(counterg = counter);
    setShowCounter(!showCounter);
  }
  
  return (
    <div className='user'>
      {Avatar}
      <h1 className='name'>{name}</h1>
      <h3 className='description'>{desciption}</h3>
      <h4 className='age'>{age}</h4>
      <FontAwesomeIcon icon={ toggleHobbies ? faMinusCircle : faPlusCircle } className='icon' onClick={showHobbies} />
      {toggleHobbies ? hobbies.map( (hobbie, index) => <Hobbie key={index} hobbie={hobbie}/>) : ''}
      <FontAwesomeIcon icon={showCounter ? faMinusCircle : faStopwatch} className='icon' onClick={() => count(hobbies)}/>
      {showCounter ? <p>Counter: {counterg}</p> : ''}
    </div>
  )
}

export default User;
