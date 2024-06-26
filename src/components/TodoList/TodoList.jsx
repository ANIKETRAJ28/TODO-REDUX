import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import TodoInput from '../../TodoInput/TodoInput';

function TodoList() {
    const todoList = useSelector((state) => state.todo);
    return (
        <>
            <TodoInput/>
            {todoList && todoList.map((todo) => <Todo title={todo.title} id={todo.id} key={todo.id}/>)}
        </>
    )
}

export default TodoList;