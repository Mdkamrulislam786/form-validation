import React from 'react'
import { useState } from 'react';
import LoginForm from './LoginForm'

const LoginPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }
    console.log('isSubmitted', isSubmitted);


    return (
        isSubmitted ? <div>Success</div> : <LoginForm submitForm={submitForm} />
    )
}

export default LoginPage
