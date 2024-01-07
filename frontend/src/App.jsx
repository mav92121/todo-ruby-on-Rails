import React from 'react'
import ShowTodos from './components/ShowTodos'
import Form from './components/Form'
import FormContext from './Context/FormContext'
const App = () => {
  return (
    <>
      <FormContext>
        <Form/>
        <ShowTodos/>
      </FormContext>
    </>
  )
}

export default App