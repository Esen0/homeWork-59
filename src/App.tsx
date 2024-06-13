import React from 'react';
import Todo from './components/Todo/Todo';
import './App.css'
import Joke from './components/Joke/Joke';

const App: React.FC = () => {

  return (
    <div className='App'>
    <Todo />
    <Joke />
    </div>
  )
}

export default App
