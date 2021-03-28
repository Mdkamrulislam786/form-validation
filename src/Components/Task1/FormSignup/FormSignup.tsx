import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import '../Form/Form.css';
import { Link } from 'react-router-dom';
import SignupInput from '../../../Widgets/Inputs/SignupInput/SignupInput';
import SubmitButton from '../../../Widgets/Buttons';
import FormControlRight from '../FormControlRight';
import Form from '../Form/Form';
import H1 from '../H1';

//types defined
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

//Comp-FormSignup
const FormSignup = ({ submitForm }: FormSignupProps) => {

    //useForm custom hook
    const { handleChange, handleSubmit, values, errors }: useFormProps = useForm(
        submitForm,
        validate
    );

    return (
        <FormControlRight>
            <Form onSubmit={handleSubmit} >
                <H1 text="Get started with us today! Create your account by filling out the
            information below"
                />
                <SignupInput
                    type='text'
                    label="Name"
                    name='username'
                    placeholder='Enter your name'
                    value={values.username}
                    onChange={handleChange}
                    errors={errors.username}
                />
                <SignupInput
                    type='email'
                    label="Email"
                    name='email'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                    errors={errors.email}
                />
                <SignupInput
                    type='password'
                    label="Password"
                    name='password'
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={handleChange}
                    errors={errors.password}
                />
                <SignupInput
                    type='password'
                    label="Password"
                    name='password2'
                    placeholder='Confirm your password'
                    value={values.password2}
                    onChange={handleChange}
                    errors={errors.password2}
                />
                <SubmitButton size="80%" text="Sign up" marginTop="10px" />
                <span className='form-input-login'>
                    Already have an account? Login <Link to="/task2">here</Link>
                </span>
            </Form>
        </FormControlRight>
    );
};

export default FormSignup;