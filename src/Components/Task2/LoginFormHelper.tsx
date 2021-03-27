import React from 'react'
import { Link } from 'react-router-dom'

const LoginFormHelper = () => {
    return (
        <div>
            <p className="text-center">
                Dont have an account? Signup <Link style={{ color: '#2186fe' }} to="/">here</Link>
            </p>
            <p className="text-center">
                <Link to="/task2" style={{ color: '#2186fe' }}>Forgot Password?</Link>
            </p>
        </div>
    )
}

export default LoginFormHelper
