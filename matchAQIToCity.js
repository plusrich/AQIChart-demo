const fs = require('fs');

let files = fs.readdirSync('./static/aqi');

for (var i = 0;i < files.length;i++) {
    let allAQI = fs.readFileSync(__dirname + '/static/aqi/' + files[i], 'utf-8').split(', ');
    for (var j = 0;j < allAQI.length;j++) {
        allAQI[j] = JSON.parse(allAQI[j]);
    }
    let cityAQI = {};
    allAQI.map( (aa) => {
        cityAQI[aa.city] = aa.aqi;
    })
    fs.writeFileSync(__dirname + '/static/cityAQI/' + files[i], JSON.stringify(cityAQI, null, 2));
    console.log(`文件${files[i]}写入完成`);
}

