import type { Task } from "./Transition";
import { memo, useDeferredValue } from "react";

type Props = {
    taskList: Task[];
}

export const TaskList = ({ taskList }: Props) => {
    const deferredTaskList = useDeferredValue(taskList);
    return (
        <>
            {deferredTaskList.map((task) => (
                <div key={task.id} style={{ width: "300px", margin: "auto", background: "lavnder" }}>
                    <p>タイトル:{task.title}</p>
                    <p>担当: {task.assignee}</p>
                </div>
            ))}
        </>
    )
}