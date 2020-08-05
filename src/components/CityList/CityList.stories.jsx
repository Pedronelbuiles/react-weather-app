import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Medellin", country: "Colombia" },
    { city: "Cali", country: "Colombia" },
    { city: "Bogota", country: "Colombia" },
    { city: "Pereira", country: "Colombia" },
    { city: "Tokio", country: "Japon" }
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />