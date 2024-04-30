import { useState } from 'react';
import { removeTodo, editTodo } from '../../actions/index';
import { useDispatch } from 'react-redux';

function Todo({title, id}) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(title);

    function updateTodo() {
        if(isEditing) {
            setIsEditing(false);
            dispatch(editTodo({id, title: editedText}));
        } else {
            setIsEditing(true);
        }
    }

    return (
        <div>
            {(isEditing) ? 
                <input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                /> : 
                editedText
            }
            <button onClick={() => dispatch(removeTodo({id}))}>Delete</button>
            <button onClick={updateTodo}>{(isEditing) ? 'Save' : 'Edit'}</button>
        </div>
    )
}

export default Todo;