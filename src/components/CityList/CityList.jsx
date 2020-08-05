import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo'
import Grid from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'
import { List } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import Weather from './../Weather'
import useCityList from './../../hooks/useCityList'
import { getCityCode } from './../../utils/utils'

const renderCityAndCountry = eventOnClickCity => ( cityAndCountry, weather ) => {
    const { city, country, countryCode } = cityAndCountry

    return (
        <ListItem button key={getCityCode(city, countryCode)} onClick={() => eventOnClickCity(city, countryCode) }>
            <Grid 
                container
                justify="center"
                alignItems="center"
            >
                <Grid 
                    item
                    md={9}
                    xs={12}
                >
                    <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                <Grid
                    item
                    md={3}
                    xs={12}
                >
                    <Weather temperature={weather && weather.temperature} state={weather && weather.state}></Weather>
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity, actions, data }) => {
    const { allWeather } = data
    const { onSetAllWeather } = actions

    const { error, setError } = useCityList(cities, allWeather, onSetAllWeather)

    return (
        <div>
            {
                error && <Alert onClose={() => setError(null) } severity="error">{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired,
    })).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
