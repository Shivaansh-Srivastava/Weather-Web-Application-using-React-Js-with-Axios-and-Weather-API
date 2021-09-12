import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div className="info">
                <h2>Weather Details:</h2>
                <hr/>
                <img src={this.props.condition.icon} alt=""/>
                <h3>Location: {this.props.location.name}</h3>
                <h3>Region: {this.props.location.region}</h3>
                <h3>Country: {this.props.location.country}</h3>
                <hr/>
                <h3>Weather: {this.props.condition.text}</h3>
                <h3>Temperature(in C): {this.props.info.temp_c}</h3>
                <h3>Temperature(in F): {this.props.info.temp_f}</h3>
                <h3>Wind in mph: {this.props.info.wind_mph}</h3>
                <h3>Wind Degree: {this.props.info.wind_degree}</h3>
                <h3>Humidity: {this.props.info.humidity}</h3>
                <h3>Cloud: {this.props.info.cloud}</h3>
            </div>
        )
    }
}

export default Weather