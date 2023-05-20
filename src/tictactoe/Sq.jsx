import React from 'react'

const Sq = (props) => {
  return (
    <div onClick={props.onClick} className='sq'>
        <h1>{props.value}</h1>
      
    </div>
  )
}

export default Sq
