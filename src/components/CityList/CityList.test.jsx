import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    { city: "Medellin", country: "Colombia", countryCode: "CO" },
    { city: "Cali", country: "Colombia", countryCode: "CO" },
    { city: "Bogota", country: "Colombia", countryCode: "CO" },
    { city: "Pereira", country: "Colombia", countryCode: "CO" },
    { city: "Tokio", country: "Japon", countryCode: "JP" }
]

test("CityList render", async () => {
    const fnClickOnItem = jest.fn()
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)
    const items = await findAllByRole("button")
    expect(items).toHaveLength(5)
})

test("CityList click on item", async () => {
    //Debemos simular una acción del usuario: Click sobre un item
    //Usaremos una función "mock"
    const fnClickOnItem = jest.fn()
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)
    const items = await findAllByRole("button")

    //Ahora para simular la acción, vamos a utilizar fireEvent
    //fireEvent es parte de la libreria testing-library/react
    fireEvent.click(items[0])

    //¿Que deberia suceder?
    //Se debio llamar a la función fnClickOnItem UNA única vez
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})