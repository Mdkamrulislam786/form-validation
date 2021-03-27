import React from 'react'
import SubmitButton from '../../Widgets/Buttons'
import Form from '../../Widgets/Form'
import LoginInput from '../../Widgets/Inputs/LoginInput/Input'
import '../Task2Template/Template.css'
import './LoginForm.css'
import LoginFormHelper from './LoginFormHelper'
const LoginForm = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault()
    }

    return (
        <div className="loginform">
            <div className="loginform_items">
                <Form onSubmit={handleSubmit}>
                    <h2 className="text-center">Login</h2>
                    <LoginInput type="text" placeholder="User Name" icon="fa fa-user" />
                    <LoginInput type="email" placeholder="Email Adress" icon="fa fa-envelope" />
                    <LoginInput type="password" placeholder="Password" icon="fa fa-key" />
                    <SubmitButton size="100%" text="Submit" marginTop="0px" />
                    <LoginFormHelper />
                </Form>
            </div>
        </div>

    )
}

export default LoginForm
