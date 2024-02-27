import './ToDoListProgram.css'

function ToDoListProgram() {
    return (
        <>
            <section className="main-widget">
                <h1 className="program-name reset-margin">
                    To Do List
                </h1>
                <main>
                    <form className="task-input-form">
                        <input type="text" name="task input" placeholder="Enter Task"/>
                        <button>
                            Add
                        </button>
                    </form>
                </main>
            </section>
        </>
    )
}

export default ToDoListProgram