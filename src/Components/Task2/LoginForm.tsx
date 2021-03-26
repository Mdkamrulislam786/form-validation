import React from 'react'
import Input from '../Task2Template/Input/Input'
import '../Task2Template/Template.css'
import './LoginForm.css'
const LoginForm = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className="loginform">
            <div className="loginform_items">
                <form onSubmit={handleSubmit} >
                    <h2 style={{ textAlign: 'center' }}>Login</h2>
                    <Input type="text" placeholder="User Name" icon="fa fa-user" />
                    <Input type="email" placeholder="Email Adress" icon="fa fa-envelope" />
                    <Input type="password" placeholder="Password" icon="fa fa-key" />
                    <div>
                        <button className="loginform__btn" type="submit">Submit</button>
                    </div>
                    <p style={{ textAlign: 'center' }}>Forgot Password?</p>
                </form>
            </div>
        </div>

    )
}

export default LoginForm
