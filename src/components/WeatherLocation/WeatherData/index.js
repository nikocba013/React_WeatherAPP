import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';


import {
    CLOUD,
    CLOUDY,
    SUN,
     RAIN,
     SNOW,
     WINDY,
} from './../../../constants/wathers';
import './styles.css';

const WeatherData = ()=> (
    <div className="weatherInfoContent">
        <WeatherTemperature temperature = {20} weatherState = {CLOUDY}></WeatherTemperature>
        <WeatherExtraInfo humidity = {80} wind={'10 m/s'}></WeatherExtraInfo>
    </div>
);

export default WeatherData