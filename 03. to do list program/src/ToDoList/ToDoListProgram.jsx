import './ToDoListProgram.css'
import React, {useState} from 'react'

function ToDoListProgram() {
    let [taskList, setTaskList] = useState([]);
    let [tempTask, setTempTask] = useState("");

    const swapInArr = (id1, id2, arr) => {
        [arr[id1], arr[id2]] = [arr[id2], arr[id1]]
        return(arr);
    }

    const updateTemptTask = (e) =>
        setTempTask(t => t = e.target.value);

    const moveTaskUp = (id) =>   
        id === 0 || setTaskList(swapInArr(id, id - 1, [...taskList]));

    const moveTaskDown = (id) =>
        id === [...taskList].length - 1 || setTaskList(swapInArr(id, id + 1, [...taskList]));

    const removeTask = (id) =>
        setTaskList(tL => tL.filter((_, i) => i !== id));
        

    const addTask = (e) => {
        e.preventDefault();
        tempTask == "" || setTaskList(tl => [...tl, tempTask]);
    }

    

    function Task(props) {
        let [t, setT] = useState(props.task);

        const updateTaskText = (e) =>
            setT(e.target.value);

        const updateTask = (e) =>
        {
            e.preventDefault();
            const tasks = [...taskList];
            tasks[props.i] = t;
            setTaskList(tasks);
        }

        return(
        <>
            <li key={props.i}>
                <form onSubmit={updateTask}>
                    <input className='reset-margin' defaultValue={props.task} onChange={updateTaskText}/>
                    <button>
                        &rarr;
                    </button>
                </form>
                <div className="task-control-wrap">
                    <button onClick={() => moveTaskUp(props.i)}>
                        ☝️ 
                    </button>
                    <button onClick={() => moveTaskDown(props.i)}>
                        👇
                    </button>
                    <button onClick={() => removeTask(props.i)}>
                        ❌
                    </button>
                </div>
            </li>
        </>
        );
    }

    return (
        <>
            <section className="main-widget">
                <h1 className="program-name reset-margin">
                    To Do List
                </h1>
                <main>
                    <form className="task-input-form" onSubmit={(e, id) => addTask(e, id)}>
                        <input type="text" name="task input" placeholder="Enter task" onChange={updateTemptTask} />
                        <button>
                            Add
                        </button>
                    </form>
                    <ul className="task-list reset-margin">
                        {taskList.map((t, index) =>  t = <Task key={index} task={t} i={index} />)}
                    </ul>
                </main>
            </section>
        </>
    )
}

export default ToDoListProgram