const fs = require("fs");

let rawdata = fs.readFileSync("scrappedData.json");
let data = JSON.parse(rawdata);
// console.log(data);

module.exports = {
  filterByMCCandMNC(MCC, MNC, result) {
    console.log(MCC);
    let array = [];
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].MCC);
      if (data[i].MCC == MCC && data[i].MNC == MNC) {
        array.push(data[i]);
      }
    }
    console.log(array);

    result(null, array);
  },
  filterByMCCorCountry(MCC, Country, result) {
    let array = [];
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].MCC);
      if (data[i].MCC == MCC || data[i].Country == Country) {
        array.push(data[i]);
      }
    }
    console.log(array);

    result(null, array);
  },
};
