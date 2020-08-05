import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastListItem = [
    { hour:18, state:"clear", temperature:17, weekDay:"Jueves" },
    { hour:6, state:"clouds", temperature:18, weekDay:"Viernes" },
    { hour:10, state:"drizzle", temperature:19, weekDay:"Sabado" },
    { hour:14, state:"rain", temperature:14, weekDay:"Domingo" },
    { hour:12, state:"clouds", temperature:11, weekDay:"Lunes" },
    { hour:16, state:"rain", temperature:15, weekDay:"Martes" },
]

test('Forecast render', async () => {
    //Con find AllByTestId podemos reconocer un elemento por el valor del prop: data-testid
    //Para este caso es forecast-item-container
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastListItem} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(6)
})
