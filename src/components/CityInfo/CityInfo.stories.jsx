import React from 'react';
import 'typeface-roboto'
import Cityinfo from './Cityinfo'

export default {
    title: "CityInfo",
    component: Cityinfo
}

export const CityExample = () => (
    <Cityinfo 
        city={"Medellín"} 
        country={"Colombia"}
    >
    </Cityinfo>
)