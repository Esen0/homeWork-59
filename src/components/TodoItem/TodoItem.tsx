import React, { useEffect, useState } from "react"

interface Props {
    id: number;
    title: string;
    onRemove: (id: number) => void;
    onUpdate: (id: number, newTitle: string) => void;
}

const TodoItem: React.FC<Props> = React.memo(({id, title, onRemove, onUpdate}) => {
    const [editTitle, setEditTitle] = useState(title);

    useEffect(() => {
        setEditTitle(title)
    }, [title]);

    const processChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(event.target.value);
        onUpdate(id, event.target.value)
    }
    
    return (
        <>
        <input type="text" value={editTitle} onChange={processChanges} />
        <button onClick={() => onRemove(id)}>Remove</button>
        </>
      )

});
  
  export default TodoItem
  