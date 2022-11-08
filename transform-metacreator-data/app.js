const fs = require("fs");
const csvToJson = require('convert-csv-to-json');

// const template = require("./data-source/foundry-template.js");
const data = "./data-source/input.csv";
let jsonData = csvToJson.fieldDelimiter(';').formatValueByType().getJsonFromCsv(data);

// const jsonDataString = JSON.stringify(jsonData, null, 2);

for(let i=0; i<jsonData.length;i++){
    console.log(jsonData[i]);
}

fs.writeFile("./data-output/output.json", JSON.stringify(jsonData, null, 2), err => {
    if (err) console.log("Error writing file:", err);
  });