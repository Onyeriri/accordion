import React, { useState } from 'react'
import { useAppContext } from '../App';
import Question from './Question';

const Questions = () => {
    const { data } = useAppContext();
    const [open, setOpen] = useState(false);

    const handleOpen = (status) => {
        if (status) {
            setOpen(!open);
        }

        setOpen(true)
    }

    const displayQuestion = data.map((question) => {
        const { id } = question;
        return <Question key={id} handleOpen={handleOpen} open={open} question={question} />
    } )


  return (
      <section className='container'>
          <h1>Questions</h1>
          {displayQuestion}
      </section>
  )
}

export default Questions