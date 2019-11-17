import React from 'react';
import WeatherIcons from 'react-weathericons';

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
    <div>
        {
            getWeatherIcon(weatherState)
        }                
        <span>{`${temperature} Cº`}</span>
    </div>
);

export default WeatherTemperature;