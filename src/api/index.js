export const fetchData = async () => {
    let url = "https://covid19.mathdro.id/api";
    try {
        const response = await fetch(url);
        const { confirmed, deaths, recovered, lastUpdated } = await response.json();
        return { confirmed, deaths, recovered, lastUpdated };
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountryData = async (country) => {
    let url = "https://covid19.mathdro.id/api/countries";
    if (country) {
        url = `${url}/${country}`;
    }
    try {
        const response = await fetch(url);
        if (country) {
            const { confirmed, deaths, recovered, lastUpdated } = await response.json();
            return { confirmed, deaths, recovered, lastUpdated };
        }
        else {
            const { countries } = await response.json();
            return countries.map((country) => country.name)
        }
    } catch (error) {
        console.log(error);        
    }
}
