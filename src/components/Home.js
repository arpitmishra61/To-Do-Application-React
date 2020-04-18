import React, { useEffect, useState } from 'react'
import NoTasks from './NoTasks'
import TaskAdd from './TaskAdd'
import EditTask from './EditTask'
import { Link, Redirect } from 'react-router-dom'

const getFromLocalStorage = (setTasks) => {

    let tasksFromLocalStorage = JSON.parse(localStorage.getItem(`tasks-${loggedUser.email}`))
    if (tasksFromLocalStorage)
        setTasks([...tasksFromLocalStorage])


}

const saveLocalStorage = (tasks) => {

    localStorage.setItem(`tasks-${loggedUser.email}`, JSON.stringify([...tasks]))



}

const checkTicked = (tasks) => {
    console.log(tasks)
    let inputs = document.querySelectorAll(".input-checked")
    inputs.forEach((input, index) => {
        if (tasks[index].checked === true)
            input.checked = true


    })


}

const showTasks = (tasks, setTasks, setTaskEditState) => {
    return tasks.map((task, i) => <div className=" card task   my-2" key={i} data-target={`#taskDes-${i}`} role="button" aria-expanded="false" >




        <div className="task-header p-2 " onMouseEnter={(e) => {
            let classList = e.target.classList
            if (!classList.contains("material-icons") || !classList.contains("pretty")) {
                console.log("right-1")
                e.target.parentElement.setAttribute("data-toggle", "collapse")



            }





        }}>
            <div className="pretty p-default">
                <input type="checkbox" className="input-checked" onMouseEnter={(e) => {
                    e.target.parentElement.parentElement.parentElement.removeAttribute("data-toggle")

                }}


                    onMouseDown={(e) => {
                        console.log(e.target)
                        if (e.target.checked === true)
                            tasks[i].checked = false
                        else
                            tasks[i].checked = true
                        saveLocalStorage([...tasks])


                    }} />


                <div className="state p-success">
                    <label>  </label>
                </div>
            </div>
            <h5>{task.title}</h5>
            <div className="actions ml-auto">

                <i className="material-icons text-primary" onClick={() => {
                    setTaskEditState({
                        title: task.title,
                        description: task.description,
                        id: i
                    })
                }}
                    onMouseEnter={(e) => {
                        e.target.parentElement.parentElement.parentElement.removeAttribute("data-toggle")

                    }}
                    data-toggle="modal" data-target="#modalEdit">create</i>
                <i className="material-icons text-danger" onClick={() => {
                    let tempTasks = tasks
                    tempTasks = tempTasks.filter((task, index) => index !== i)
                    saveLocalStorage([...tempTasks])
                    setTasks([...tempTasks])

                }}

                    onMouseEnter={(e) => {
                        e.target.parentElement.parentElement.parentElement.removeAttribute("data-toggle")

                    }}>delete</i>

            </div>

        </div>
        <p className="collapse" id={`taskDes-${i}`}>

            {task.description}
        </p>




    </div>)

}
let loggedUser = {}
export default function Home() {
    loggedUser = JSON.parse(localStorage.getItem("userLogged"))

    const setTasksParent = (task) => {
        saveLocalStorage([...tasks, task])



        setTasks([...tasks, task])
    }

    const editTask = (data, id) => {
        tasks.forEach((task, index) => {
            if (index === id) {
                tasks[id].title = data.title
                tasks[id].description = data.description
            }
        })
        saveLocalStorage([...tasks])
        setTasks([...tasks])

    }
    const [tasks, setTasks] = useState([])
    const [taskEdit, setTaskEditState] = useState({})
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        if (!localStorage.getItem("userLogged"))
            return <Redirect to="/" />
        if (localStorage.length > 1)
            getFromLocalStorage(setTasks)
        setLoading(false)






    }, [])

    useEffect(() => {
        if (!loading)
            checkTicked(tasks)


    }, [tasks, loading])

    if (!localStorage.getItem("userLogged"))
        return <Redirect to="/" />
    return (
        <div className="toDoSection" >
            {loading ? <h1>loading</h1> : !tasks.length ? <NoTasks /> :
                <div className="card p-3 clearfix tasks">
                    <div className="header"> <h3 className="text-primary d-inline-block">Tasks</h3>
                        <i className="material-icons ml-2 text-success " data-target="#exampleModal" data-toggle="modal">add_circle</i>
                        <div className="ml-auto">
                            <h6>Logout</h6>
                            <Link to="/"><i className="material-icons mx-2" onClick={() => {
                                localStorage.removeItem("userLogged")
                            }}>logout</i></Link>


                        </div>
                    </div>

                    <hr />

                    {showTasks(tasks, setTasks, setTaskEditState, taskEdit)}
                </div>
            }
            <TaskAdd setTasksParent={setTasksParent} />
            <EditTask title={taskEdit.title} description={taskEdit.description} editData={editTask} id={taskEdit.id} />

        </div>
    )
}
