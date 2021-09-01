import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoTasks from './Components/TodoTasks';
import { ITask } from './Interfaces';

const App: FC = () => {
  const [task, setTasks] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTasks(event.target.value);
    } else {
      setDeadline(+event.target.value);
      // or use Number(event.target.value)
    }
  };

  const addTask = (): void => {
    const newTasks = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTasks]);
    console.log(todoList);
    setTasks('');
    setDeadline(0);
  };

  const completeTasks = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div>
      <input
        type='text'
        placeholder='task..'
        name='task'
        value={task}
        onChange={handleChange}
      />
      <input
        type='number'
        placeholder='Number of days'
        name='deadline'
        value={deadline}
        onChange={handleChange}
      />
      <button onClick={addTask}>Add</button>
      <div>
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTasks key={key} task={task} completeTasks={completeTasks} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
