import { useState } from 'react'

import { Form, Input, Select } from './Forms'

function App() {
  const [count, setCount] = useState(0)

  const a = 'asda'

  const onSubmit = (data) => {
    console.table(data)
  }

  return (
    <div className='w-full min-w-full h-screen bg-slate-900'>
      <Form onSubmit={onSubmit} className='flex flex-col'>
        <Input name='firstName' />
        <Input name='lastName' />
        <Select name='sex' options={['female', 'male']} />
        <button>Submit</button>
      </Form>
    </div>
  )
}

export default App
