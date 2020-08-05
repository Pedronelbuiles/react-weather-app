import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import useCityPage from './../hooks/useCityiPage'
import { LinearProgress } from '@material-ui/core'
import useCityList from './../hooks/useCityList'
import { getCityCode } from './../utils/utils'
import { getCountryNameByConutryCode } from './../utils/serviceCities'

const CityPage = ({actions, data}) => {
    const { allWeather, allChartData, allForecastItemList } = data
    const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions
    const { city, countryCode } = useCityPage(allChartData, allForecastItemList, onSetChartData, onSetForecastItemList)

    const cities = useMemo(() => ([{ city, countryCode }]), [ city, countryCode ])

    useCityList(cities, allWeather, onSetAllWeather)

    const cityCode = getCityCode(city,countryCode)
    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const country = countryCode && getCountryNameByConutryCode(countryCode)
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind
    const state = weather && weather.state
    const temperature = weather && weather.temperature

    return (
        <AppFrame>
            <Paper elevation={6}>
                <Grid container
                    justify="space-around"
                    direction="column"
                    spacing={2}>
                    <Grid item container justify="center" alignItems="flex-end" xs={12}>
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid container item justify="center" xs={12}>
                        <Weather state={state} temperature={temperature} />
                        { humidity && wind && <WeatherDetails humidity={humidity} wind={wind} /> }
                    </Grid>
                    <Grid item>
                        { !chartData && !forecastItemList && <LinearProgress /> }
                    </Grid>
                    <Grid item xs={12}>
                        { chartData && <ForecastChart data={chartData} />}
                    </Grid>
                    <Grid item xs={12}>
                        { forecastItemList && <Forecast forecastItemList={forecastItemList} />}
                    </Grid>
                </Grid>
            </Paper>
        </AppFrame>
    )
}


export default CityPage
