import React, { useEffect, useState } from 'react'

export default function TaskAdd(props) {
    console.log(props)
    const [data, setdata] = useState({})
    useEffect(() => {
        setdata({ title: props.title, description: props.description })

    }, [props])// eslint-disable-next-line
    return (

        <div className="modal fade rounded" id="modalEdit" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Task</h5>
                        <button type="button" className="close" data-dismiss="modalEdit" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body px-3">
                        <input type="text" className="form-control p-3 my-2 titleEdit" placeholder="Task Title" value={data.title} onChange={(e) => {
                            setdata({ ...data, title: e.target.value })

                        }} />

                        <textarea type="text" className="form-control p-3 descriptionEdit" rows="10" placeholder="Task Description" value={data.description} onChange={(e) => {
                            setdata({ ...data, description: e.target.value })

                        }} />

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            const data = {
                                title: document.querySelector(".titleEdit").value,
                                description: document.querySelector(".descriptionEdit").value
                            }
                            props.editData(data, props.id)

                        }} data-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
