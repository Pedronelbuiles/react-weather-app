import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test('ForecastItem render', async () => {    
    const { findByText } = render(<ForecastItem weekDay="Lunes" hour={22} temperature={40} state="clear"/>)
    const weekDay = await findByText("Lunes")
    const hour = await findByText("22")
    const temperature = await findByText("40 °")

    expect(weekDay).toHaveTextContent("Lunes")
    expect(hour).toHaveTextContent("22")
    expect(temperature).toHaveTextContent("40 °")
});
