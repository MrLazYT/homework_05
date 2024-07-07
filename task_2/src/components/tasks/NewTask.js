import { useOutletContext } from "react-router-dom";

export default function NewTask()
{
    function addTask()
    {
        const input = document.querySelector("input");
        const newTask = {
            id: tasks.length + 1,
            task: input.value,
            date: new Date().toLocaleDateString()
        }

        if (newTask.task !== "")
        {
            setTasks([...tasks, newTask]);
            input.value = "";
        }
    }

    const [tasks, setTasks] = useOutletContext();

    return (
        <div>
            <input placeholder="Enter a new task"/>
            <button className="attached" onClick={addTask}>Add task</button>
        </div>
    );
}