import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'
import { getCities } from './../utils/serviceCities'

const MainPage = ({ actions, data }) => {
    const history = useHistory()

    const onClickHandler = (city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={8}>
                <CityList cities={getCities()} onClickCity={onClickHandler} data={data} actions={actions} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
