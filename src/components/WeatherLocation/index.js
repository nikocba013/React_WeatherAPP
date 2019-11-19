import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = ()=> (    
        <div>
            <div>
                <Location city ={'Barcelona'}></Location>
                <WeatherData></WeatherData>
            </div>
            {/* <div>
                <Location city ={'Madrid'}></Location>
                <WeatherData></WeatherData>
            </div> */}
        </div>                
    
);

export default WeatherLocation;