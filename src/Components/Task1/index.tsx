import React, { useState } from 'react';
import FormContainer from './FormContainer';
import FormContentLeft from './FormContentLeft';
import FormSignup from './FormSignup/FormSignup';
import FormSuccess from './FormSuccess/FormSuccess';
import './index.css'

const Task1 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
        <FormContainer>
            <FormContentLeft />
            {!isSubmitted ? (
                <FormSignup submitForm={submitForm} />
            ) : (
                <FormSuccess />
            )}
        </FormContainer>
    );
};

export default Task1;