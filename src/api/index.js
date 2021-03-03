const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let updated_url = url;
    if (country) {
        updated_url = `${url}/countries/${country}`;
    }
    try {
        const response = await fetch(updated_url);
        const { confirmed, deaths, recovered, lastUpdated } = await response.json();
        return { confirmed, deaths, recovered, lastUpdated };
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountryData = async () => {
    let updated_url = `${url}/countries`;
    try {
        const response = await fetch(updated_url);
        const { countries } = await response.json();
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    let updated_url = `${url}/daily`;
    try {
        const response = await fetch(updated_url);
        const data = await response.json();
        return data.map(({confirmed,deaths,reportDate}) => ({ confirmed, deaths, reportDate }));
    } catch (error) {
        console.log(error);
    }
}
