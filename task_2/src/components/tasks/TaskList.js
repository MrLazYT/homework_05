import { Outlet, useOutletContext } from "react-router-dom";
import NewTask from "./NewTask";

export default function TaskList()
{   
    function MarkAsDoneOrToDo(id)
    {
        const tr = document.getElementById(`task_${id}_tr`);
        const btn = document.getElementById(`task_${id}_btn`);

        if (tr.className === "todo")
        {
            tr.className = "done";
            btn.innerText = "ToDo";
        }
        else
        {
            tr.className = "todo";
            btn.innerText = "Done";
        }
    }

    const [tasks, setTasks] = useOutletContext();
    
    return (
        <div>
            <Outlet context = {[tasks, setTasks]}/>
            <div>
                <h1>Task List</h1>
            </div>

            <div>
                <NewTask/>
            </div>

            <div>
                <h2>Todo:</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Mark as done</th>
                    </tr>
                    { tasks.map((task) => {
                        return (
                            <tr id={`task_${task.id}_tr`} key={task.id} className="todo">
                                    <td className="task-title">
                                        { task.task}
                                    </td>

                                    <td className="task-date">
                                        {task.date}
                                    </td>

                                    <td>
                                        <button id={`task_${task.id}_btn`} onClick={() => MarkAsDoneOrToDo(task.id)}>Done</button>
                                    </td>
                            </tr>
                            );
                        })
                    }
                </table>
            </div>
        </div>
    );
}