import React, { useState } from 'react';
import { addTask, removeTask } from '../../redux/reducers/todolist';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {

    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();
    const { tasks, message } = useSelector(state => state.todoListReducer);

    const handleChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleAddTask = () => {
        dispatch(addTask({
            taskName
        }))
    }

    const handleRemoveTask = (id) => {
        dispatch(removeTask({
            id
        }))
    }

    return (
        <div>
            <input type="text" onChange={handleChange} name="task_name" />
            <button onClick={() => handleAddTask()}>Add task</button>
            <p>{message}</p>
            <ul>
                {tasks?.map((task, index) => {
                    return (
                     <React.Fragment key={index}>
                        <li>{task?.name}</li>
                        <button onClick={() => handleRemoveTask(task?.id)}>Delete task</button>
                    </React.Fragment>
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoList;
