import React, { useState } from 'react';
import { HiMiniMinusCircle, HiMiniPlusCircle } from "react-icons/hi2"
import { useAppContext } from '../App';

const Question = ({question}) => {
    const { title, info, id } = question;
    const [status, setStatus] = useState(true);
    const { handleToggle, isActiveId } = useAppContext();

    const activeId = id === isActiveId;

  return (
      <article>
          <div className='question'>
              <header>
                  <h5>{title}</h5>
                  <button type="button" className='question-btn' onClick={() => handleToggle(id)}>{activeId ? <HiMiniMinusCircle /> : <HiMiniPlusCircle /> }
                  </button>
              </header>
              {activeId && <p>{info}</p>}
          </div>
    </article>
  )
}

export default Question