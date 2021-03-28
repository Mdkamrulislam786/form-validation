import React from 'react'
import { useState } from 'react'
import SubmitButton from '../../Widgets/Buttons'
import Form from '../../Widgets/Form'
import LoginInput from '../../Widgets/Inputs/LoginInput/Input'
import useForm from '../Task1/useForm'
import validate from '../Task1/validateInfo'
import '../Task2Template/Template.css'
import './LoginForm.css'
import LoginFormHelper from './LoginFormHelper'

interface ValueProps {
    username: string;
    email: string;
    password: string;
    password2: string;
}

interface useFormProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => any, handleSubmit: (e: React.FormEvent<HTMLInputElement>) => any, errors: any, values: ValueProps
}

interface FormSignupProps {
    submitForm: any
}

const LoginForm = ({ submitForm }: FormSignupProps) => {

    const { handleChange, handleSubmit, values, errors }: useFormProps = useForm(
        submitForm,
        validate
    );

    return (
        <div className="loginform">
            <div className="loginform_items">
                <Form onSubmit={handleSubmit}>
                    <h2 className="text-center">Login</h2>
                    <LoginInput type="text" placeholder="User Name" icon="fa fa-user"
                        name='username'
                        value={values.username}
                        onChange={handleChange}
                        errors={errors.username} />
                    <LoginInput type="email" placeholder="Email Adress" icon="fa fa-envelope"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        errors={errors.email} />
                    <LoginInput type="password" placeholder="Password" icon="fa fa-key"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        errors={errors.password} />
                    <SubmitButton size="100%" text="Submit" marginTop="0px" />
                    <LoginFormHelper />
                </Form>
            </div>
        </div>

    )
}

export default LoginForm
