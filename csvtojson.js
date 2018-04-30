const csv = require("csvtojson");
const fs = require("fs");

let files = fs.readdirSync(__dirname + '/static/aqi');

files.map( (f) => {
    let csvFilePath = __dirname + '\\static\\aqi\\' + f;
    csv()
    .fromFile(csvFilePath)
    .on('json',(jsonObj)=>{
        // combine csv header row and csv line to a json object
        // jsonObj.a ==> 1 or 4
        
        fs.appendFileSync("./static/aqi/" + f.slice(0, -3) + 'json', `${JSON.stringify(jsonObj)}, \n`);
        //console.log(JSON.stringify(jsonObj));
    })
    .on('done',(error)=>{
        console.log('end');
    })
})