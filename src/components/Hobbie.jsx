import React from 'react'

const Hobbie = ( {hobbie} ) => {
  return (
    <div className='hobbie'>
      <h1>{hobbie.name}</h1>
      <h3>{hobbie.description}</h3>
      <h4>{hobbie.isActive ? 'Active' : 'Not Active'}</h4>
    </div>
  )
}

export default Hobbie;
