import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

interface Props {
    id: number;
    title: string;
}

const Todo: React.FC = () => {
    const [todo, setTodo] = useState<Props[]>([]);
    const [newTitle, setNewTitle] = useState('');

    const handleAdd = () => {
        const newTodo = {
          id: Math.random(),
          title: newTitle,
        };
        setTodo((prevTodo) => [...prevTodo, newTodo]);
        setNewTitle('');
    };

    const handleDelete = (id: number) => {
        setTodo((prevTodo) => prevTodo.filter(todo => todo.id !== id));
    };

    const handleUpdate = (id: number, newTitle: string) => {
        setTodo((prevTodo) =>
            prevTodo.map(todo =>
                todo.id === id ? { ...todo, title: newTitle } : todo
          )
        );
      };

    return (
      <>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {todo.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            onRemove={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
      </>
    )
  }

  export default Todo