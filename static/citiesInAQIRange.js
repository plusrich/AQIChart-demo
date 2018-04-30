let citiesInAQIRange = (arr, property) => {
    let a = 0, b = 0, c = 0, d = 0, e = 0;
            for (var dd of arr) {
                let aqi = dd[property][2];
                if (aqi === '-') {
                    continue;
                } else if (aqi < 51) {
                    a += 1;
                } else if (aqi < 101) {
                    b += 1;
                } else if (aqi < 201) {
                    c += 1;
                } else if (aqi < 301) {
                    d += 1;
                } else {
                    e += 1;
                }
            }
            return [
                        {"value": a, "name": "优", "visualMap": false},
                        {"value": b, "name": "良", "visualMap": false},
                        {"value": c, "name": "轻度污染", "visualMap": false},
                        {"value": d, "name": "中度污染", "visualMap": false},
                        {"value": e, "name": "重度污染", "visualMap": false}
                    ];
};

module.exports = citiesInAQIRange;