import React from 'react'

const Gender = () => {
    return (
        <div className="input-group">
            <input type="radio" name="gender" value="male" id="gender-male" />
            <label htmlFor="gender-male">Male</label>
            <input type="radio" name="gender" value="female" id="gender-female" />
            <label htmlFor="gender-female">Female</label>
        </div>
    )
}

export default Gender
