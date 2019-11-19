import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';


const icons = {
    cloud:'cloud',
    cloudy: 'cloudy',
    rain:'rain',
    snow:'snow',
    windy:'windy',
    sun: 'day-sunny',
    fog: 'day-fog'
};

const getWeatherIcon = (weatherState) =>{
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name = {icon} size='2x'></WeatherIcons>
    else
        return <WeatherIcons name = 'day-sunny' size='2x'></WeatherIcons>
}

const WeatherTemperature = ({temperature , weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }                
        <span>{`${temperature} Cº`}</span>
    </div>
);

WeatherTemperature.propTypes ={
    temperature: PropTypes.number,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;