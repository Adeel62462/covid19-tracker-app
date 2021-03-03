import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { fetchCountryData } from "../api/index";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
    },
    img: {
        width: "15%",
        padding: "10px",
    },
    formControl: {
        margin: theme.spacing(1),
        maxWidth: 180,
        minWidth: 180,
        position: "absolute",
        right: 20,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        '&:before': {
            borderColor: "white",
        },
        '&:hover:not(.Mui-disabled):before': {
            borderColor: "white",
        },
    },
    whiteColor: {
        color: "white",
    },
}));

export default function Header({ onCountrySelected }) {
    const classes = useStyles();
    const [country, setCountry] = useState("");
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await fetchCountryData();
            setCountryList(data);
        }
        fetchCountries();
    }, []);

    function handleChange(event) {
        const name = event.target.value;
        setCountry(name);
        onCountrySelected(name);
    }

    return (
        <div className={classes.root}>
            <AppBar position="sticky" style={{ backgroundColor: "#6c5b7b" }}>
                <Toolbar>
                    <img
                        className={classes.img}
                        src="https://i.ibb.co/7QpKsCX/image.png"
                        alt="Covid-19"
                    />
                    <FormControl className={classes.formControl}>
                        <Select
                            native
                            className={classes.select}
                            classes={{ icon: classes.whiteColor }}
                            value={country}
                            onChange={handleChange}
                            id="country"
                        >
                            <option value="">Global</option>
                            {
                                countryList.map((name, index) => (
                                    <option key={index} value={name}>{name}</option>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </div>
    );
}