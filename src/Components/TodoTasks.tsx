import React from 'react';
import { ITask } from '../Interfaces';

interface Props {
  task: ITask;
  completeTasks(taskNameToDelete: string): void;
}

const TodoTasks = ({ task, completeTasks }: Props) => {
  return (
    <>
      <div>
        {task.taskName}
        {task.deadline}
        <button onClick={() => completeTasks(task.taskName)}>X</button>
      </div>
    </>
  );
};
export default TodoTasks;
