import { useOutletContext, useParams } from "react-router-dom";

export default function Task()
{
    const { id } = useParams();
    const [tasks] = useOutletContext();

    const task = tasks.find(task => task.id === parseInt(id));

    return (
        <div>
            <h1>{task.task}</h1>
        </div>
    );
}