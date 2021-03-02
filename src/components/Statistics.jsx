import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        justifyContent: "center",
    },
    paper: {
        padding: theme.spacing(2),
    },
    paperImage: {
        float: "right",
    },
}));

export default function Statistics({ data: { confirmed, recovered, deaths, lastUpdated } }) {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper} style={{ backgroundColor: "#20a8d8" }}>
                    {
                        !confirmed ? <CircularProgress className={{ justifyContent: "center" }} /> : (
                            <>
                                <img
                                    className={classes.paperImage}
                                    src="https://video.infusiblecoder.com/covid_tracker_web/images/coronavirus.png"
                                    alt="infected image"
                                />
                                <Typography variant="h6">Infected</Typography>
                                <Typography variant="h4">
                                    <CountUp
                                        start={0}
                                        end={confirmed.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                            </>
                        )}
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper} style={{ backgroundColor: "#2eb872" }}>
                    {
                        !confirmed ? <CircularProgress /> : (
                            <>
                                <img
                                    className={classes.paperImage}
                                    src="https://video.infusiblecoder.com/covid_tracker_web/images/recovered.png"
                                    alt="recovered image"
                                />
                                <Typography variant="h6">Recovered</Typography>
                                <Typography variant="h4">
                                    <CountUp
                                        start={0}
                                        end={recovered.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                            </>
                        )}
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper} style={{ backgroundColor: "#fa4659" }}>
                    {
                        !confirmed ? <CircularProgress /> : (
                            <>
                                <img
                                    className={classes.paperImage}
                                    src="https://video.infusiblecoder.com/covid_tracker_web/images/corpse.png"
                                    alt="deaths image"
                                />
                                <Typography variant="h6">Deaths</Typography>
                                <Typography variant="h4">
                                    <CountUp
                                        start={0}
                                        end={deaths.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                            </>
                        )}
                </Paper>
            </Grid>
        </Grid>
    );
}