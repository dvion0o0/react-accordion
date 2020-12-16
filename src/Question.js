import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({info, title}) => {
const [read, setRead]  = useState(false)

  return (
    <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=> setRead(!read)}>{read ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
    </header>
    <p>{read ? info : null}</p>
    </article>
  )
};

export default Question;
