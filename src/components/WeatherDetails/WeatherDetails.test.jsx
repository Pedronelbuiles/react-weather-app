import React from 'react';
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test("WeatherDetails render", async () => {
    const humidity = "10"
    const wind = "9"
    const { findAllByRole } = render(<WeatherDetails humidity={10} wind={9} />)
    const weatherDetailsComponenets = await findAllByRole("heading")
    expect(weatherDetailsComponenets[0]).toHaveTextContent("10")
    expect(weatherDetailsComponenets[1]).toHaveTextContent("9")
})

//Esta es otra forma de testear el componente con la función findByText
//La función findByText permite encontrar un componente por el texto que muestra en pantalla
test("WeatherDetails render findByText", async () => {
    const { findByText } = render(<WeatherDetails humidity={80} wind={10} />)

    //Usaremos expresiones regulares o REGEXP, la expresión que usaremos son los /xx/
    //Esta expresión regular nos permite identificar un text en especifico que este entre caracteres a la derecha y a la izquierda
    const humidity = await findByText(/80/)
    const wind = await findByText(/10/)
    expect(humidity).toHaveTextContent("Humedad: 80%")
    expect(wind).toHaveTextContent("Viento: 10 km/h")
})