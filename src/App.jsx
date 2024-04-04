import React from 'react'
import Form from './components/Form'

function App() {
  return (
    <div className='w-full h-screen bg-blue-500 flex items-center justify-center font-serif'>
      <div className="container w-[370px] bg-white p-8 rounded-xl">
        <h1 className='text-2xl font-semibold text-center text-blue-700 '>Currency Coverter</h1>
        <Form />
      </div>
    </div>
  )
}

export default App
