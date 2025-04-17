import React from 'react'
import { useNavigate } from 'react-router'

const ClassTwelth = () => {
    const navigate  = useNavigate();

    function redirect(){
        navigate('/')
    }

  return (
    <div>
      I have cleared my 12th class with 80% marks.
      <button onClick={redirect}>Go back to home</button>
    </div>
  )
}

export default ClassTwelth
