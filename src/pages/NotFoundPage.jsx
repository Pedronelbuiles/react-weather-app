import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiAlien } from 'react-icons/wi'

const NotFoundPage = () => {
    return (
        <Grid container
            direction="column"
            justify="center"
            className="full">
            <div className="highlight">
                <Grid container item xs={12}
                    justify="center"
                    alignItems="center">
                    <Grid item>
                        <IconContext.Provider value={{ size:"6em" }}>
                            <WiAlien />
                        </IconContext.Provider>
                    </Grid>
                    <Grid item container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <Typography variant="h4" color="inherit">
                            404 | Página no encontrada
                        </Typography>
                        <Link color="inherit"
                            aria-label="menu"
                            component={RouterLink}
                            to="/main">
                            Volver al inicio
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default NotFoundPage
