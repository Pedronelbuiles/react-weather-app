import React from 'react'
import { render } from '@testing-library/react';
import CityInfo from './Cityinfo' // SUT: Subject under testing (Objeto del testeo)

test("CityInfo Render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Medellin";
    const country = "Colombia";
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)
    const cityAndCountryComponents = await findAllByRole("heading")
    // Assert
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
} )