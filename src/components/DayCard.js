import React from 'react';
var moment = require('moment');

function UpperCase(reading){
  var x = reading.weather[0].description;
  var res = x[0].toUpperCase() + x.slice(1);
  return res;
}

const DayCard = ({ reading, degreeType }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const fahrenheit = Math.round(reading.main.temp)
  const celsius = Math.round((fahrenheit - 32) * 5/9)

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <div className="col-sm-2 border-color">
      <div className="card bg-info">
        <h5 className="card-title">{moment(newDate).format('dddd')}</h5>
        <p className="card-text text-white">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <i className={imgURL}></i>
        <h2 className="text-white">{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
        <div className="card-body">
          <h6 className="card-text ">{UpperCase(reading)}</h6>
        </div>
      </div>
    </div>
  )
}

export default DayCard;