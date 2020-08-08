import React from 'react';

const DegreeToggle = ({updateDegree, degreeType }) => {
    return (
        <>
        <div className="form-check form-check-inline">
            <input
                type="radio"
                className="form-check-input"
                name="degree-type"
                id="celsius"
                value="celsius"
                checked={degreeType === "celsius"}
                onChange={updateDegree}
            />
            <label htmlFor="celsius" className="form-check-label">Celsius</label>
        </div>
        <div className="form-check form-check-inline">
            <input
                type="radio"
                className="form-check-input"
                name="degree-type"
                id="farenheit"
                value="fahrenheit"
                checked={degreeType === "fahrenheit"}
                onChange={updateDegree}
            />
            <label htmlFor="farenheit" className="form-check-label">Farenheit</label>
        </div>
        </>
    );
}

export default DegreeToggle;