import React, { useState, useEffect } from 'react';

const useForm = (callback: any, validate: any) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    //HandleChange
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    //Handle submit
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>): any => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        console.log('submited');
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            console.log('callback has run');
        }
    }, [errors, callback, isSubmitting]);

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;