import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function Login() {

    const [user, setuser] = useState(null)
    const [error, seterror] = useState(false)

    if (localStorage.getItem("userLogged"))
        return <Redirect to="/app" />
    if (user) {
        localStorage.setItem("userLogged", JSON.stringify(user))
        return <Redirect to={{
            pathname: "/app",

        }} />
    }
    else
        return (
            <div className=" login">
                <div className="login-info card">
                    <h3 className="mb-3 text-light">Login</h3>

                    <hr />
                    <input className="form-control p-2 mb-2 email" type="email" placeholder="Email" />
                    <div></div>
                    <input className="form-control p-2 mb-2 password" type="password" placeholder="password" />
                    {error ? <p className="text-light p-1 bg-danger d-inline-block">Information provided is incorrect</p> : null}
                    <button className="btn btn-success" onClick={() => {
                        let userLogin = {
                            email: document.querySelector(".email").value
                            ,
                            password: document.querySelector(".password").value

                        }

                        let users = JSON.parse(localStorage.getItem("User"))
                        let notFoundFlag = true;
                        users.forEach((user) => {
                            if (userLogin.email === user.email && userLogin.password === user.password)
                                setuser(user)


                        })

                        if (notFoundFlag)
                            seterror(true)


                    }}>Login</button></div>



            </div>
        )
}
