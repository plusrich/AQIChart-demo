let requestAQIData = (file) => {
    let aqiData;
    axios.get('../../static/cityAQI/' + file)
    .then( (response) => {
        aqiData = response.data;
    })
    .catch( (error) => {
        console.log(error);
    })

    return aqiData;
};

module.exports = requestAQIData;