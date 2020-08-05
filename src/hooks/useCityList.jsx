import { useEffect, useState } from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/tranforms/getAllWeather'
import { getCityCode } from './../utils/utils'

const useCityList = (cities, allWeather, onSetAllWeather) => {
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({city,countryCode})
            try {
                const propName = getCityCode(city, countryCode)
                onSetAllWeather({ [propName]: {} })
                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response,city,countryCode)
                onSetAllWeather(allWeatherAux)
            } catch (error) {
                if (error.response) { // error con respuesta del server
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) { // error que sucede por no llegar al server
                    setError("Verifica tu conexión a internet")
                } else { // errores imprevistos
                    setError("Error al cargar los datos")
                }
            }
        }

        cities.forEach(({ city, countryCode }) => {
            if(!allWeather[getCityCode(city,countryCode)]){
                setWeather(city, countryCode)
            }
        });
    }, [cities, allWeather, onSetAllWeather])
    
    return { error, setError }
}

export default useCityList