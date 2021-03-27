import React from 'react'

const Form = ({ children, onSubmit }: any) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form
