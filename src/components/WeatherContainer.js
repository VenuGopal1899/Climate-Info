import React, { Component} from 'react';
import apiConfig from './apiKeys'
import axios from 'axios'
import DayCard from './DayCard'
import DegreeToggle from './DegreeToggle'

class WeatherContainer extends Component{
    state = {
        fullData: [],
        dailyData: [],
        degreeType: "fahrenheit"
    }

    updateDegree = (e) => {
        this.setState({
            degreeType : e.target.value
        }, () => console.log(this.state))
    }

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} degreeType={this.state.degreeType} key={index}/>)
    }

    componentDidMount = () =>{
        const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.owmKey}`
        axios.get(weatherUrl)
            .then(res => {
                const dailyData = res.data.list.filter(reading => {return reading.dt_txt.includes("06:00:00")})
                this.setState({
                    fullData: res.data.list,
                    dailyData: dailyData
                })
            })
    }

    render(){
        return(
            <div className="container col-sm-9">
                <h3 className="bg-info text-white display-2 jumbotron jumbotron-fluid">5-Day Forecast</h3>
                <h6 className="display-4 text-dark">New York, US</h6>
                <DegreeToggle updateDegree = {this.updateDegree} degreeType = {this.state.degreeType}/>
                <div className="row justify-content-center">
                    {this.formatDayCards()}
                </div>
            </div>
        )
    }
}

export default WeatherContainer;