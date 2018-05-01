let topFiveAirQualityCity = (arr, prop) => {
    for (var i = 0;i < arr.length;i++) {
        for (var j = 0;j < arr.length-i-1;j++) {
            if (arr[j][prop][2] > arr[j+1][prop][2] || isNaN(arr[j][prop][2])) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr.slice(0, 5);
};

module.exports = topFiveAirQualityCity;