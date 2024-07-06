import { Link, Outlet, useOutletContext } from "react-router-dom";

export default function TaskList()
{
    const [tasks, setTasks] = useOutletContext();

    return (
        <div>
            <Outlet context = {[tasks, setTasks]}/>
            <div>
                <h1>Task List</h1>
            </div>

            <div>
                <h1>Add Task</h1>
            </div>

            <div>
                <h2>Todo:</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Mark as done</th>
                    </tr>
                    { tasks.map((task) => (
                            <tr key={task.id}>
                                    <td className="task-title">
                                        {task.task}
                                    </td>

                                    <td className="task-date">
                                        {task.date}
                                    </td>

                                    <td>
                                        <button>Mark as done</button>
                                    </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    );
}