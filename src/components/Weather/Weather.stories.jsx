import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

export const WeatherExampleCloud = () => <Weather temperature={10} state="clouds" />

export const WeatherExampleSunny = () => <Weather temperature={10} state="clear" />