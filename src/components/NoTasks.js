import React from 'react'
import TaskAdd from './TaskAdd'

export default function NoTasks() {
    return (
        <div className="noTasks">

            <h3 className="text-light">You have no tasks click to add tasks.</h3>
            <button className="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModal">Add Tasks</button>


        </div>
    )
}
