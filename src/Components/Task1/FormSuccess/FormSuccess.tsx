import React from 'react';
import '../Form/Form.css';
import FormControlRight from '../FormControlRight';
import './FormSuccess.css'

const FormSuccess = () => {
    return (
        <FormControlRight>
            <h1 className='form-success'>We have received your request!</h1>
            <img className='form-img-2' src='img/img-3.svg' alt='successimage' />
        </FormControlRight>
    );
};

export default FormSuccess;
