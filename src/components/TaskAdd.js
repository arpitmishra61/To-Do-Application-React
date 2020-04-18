import React from 'react'

export default function TaskAdd(props) {
    console.log(props)
    return (

        <div className="modal fade rounded" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body px-3">
                        <input type="text" className="form-control p-3 my-2 taskTitle" placeholder="Task Title" />

                        <textarea type="text" className="form-control p-3 taskDescription" rows="10" placeholder="Task Description " />

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            props.setTasksParent({
                                title: document.querySelector(".taskTitle").value,
                                description: document.querySelector(".taskDescription").value
                            })
                            document.querySelector(".taskTitle").value = ""
                            document.querySelector(".taskDescription").value = ""
                        }} data-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
