import React from 'react'

const DateOfBirth = () => {
    return (
        <div className="input-group">
            <div className="col-third">
                <input type="text" placeholder="DD" />
            </div>
            <div className="col-third">
                <input type="text" placeholder="MM" />
            </div>
            <div className="col-third">
                <input type="text" placeholder="YYYY" />
            </div>
        </div>
    )
}

export default DateOfBirth
