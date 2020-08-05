import convertUnits from 'convert-units'

export const getCityCode = (city, cityCode) => `${city}-${cityCode}`

export const toCelsius = (temp) => Number(convertUnits(temp).from("K").to("C").toFixed(0))