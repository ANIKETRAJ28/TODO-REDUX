import { useState } from 'react';
import { removeTodo, editTodo } from '../../actions/index';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

function Todo({title, id}) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(title);
    const actions = bindActionCreators({removeTodo, editTodo}, dispatch);

    function updateTodo() {
        if(isEditing) {
            setIsEditing(false);
            actions.editTodo({id, title: editedText});
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
            <button onClick={() => actions.removeTodo({id})}>Delete</button>
            <button onClick={updateTodo}>{(isEditing) ? 'Save' : 'Edit'}</button>
        </div>
    )
}

export default Todo;