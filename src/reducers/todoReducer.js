import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from '../constants/index';

function todoReducer(todo = [], action) {
    if(action.type == ADD_TODO) {
        return [...todo, {id: action.payload.id, title: action.payload.title}];
    }
    if(action.type == REMOVE_TODO) {
        return todo.filter(todo => todo.id != action.payload.id);
    }
    if(action.type == EDIT_TODO) {
        return todo.map(todo => {
            if(todo.id == action.payload.id) {
                todo.title = action.payload.title;
            }
            return todo
        });
    }
    return todo;
}

export default todoReducer;