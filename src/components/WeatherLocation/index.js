import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = ()=> (    
        <div className="weathers">
            <div className="weatherLocation">
                <Location city ={'Barcelona'}></Location>
                <WeatherData></WeatherData>
            </div>
            <div className="weatherLocation">
                <Location city ={'Madrid'}></Location>
                <WeatherData></WeatherData>
            </div>
        </div>                
    
);

export default WeatherLocation;