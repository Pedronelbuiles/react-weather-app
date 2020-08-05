import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

export const forecastListItem = [
    { hour:18, state:"clear", temperature:17, weekDay:"Jueves" },
    { hour:6, state:"clouds", temperature:18, weekDay:"Viernes" },
    { hour:10, state:"drizzle", temperature:19, weekDay:"Sabado" },
    { hour:14, state:"rain", temperature:14, weekDay:"Domingo" },
    { hour:12, state:"clouds", temperature:11, weekDay:"Lunes" },
    { hour:16, state:"rain", temperature:15, weekDay:"Martes" },
]

export const ForecastExample = () => (<Forecast forecastItemList={ forecastListItem } />)