//! 1 Case. Record json file
const fs = require('fs');
// const path = require('path');
// const student = require("./one.json");
const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// const man = {
//     name: "Dima",
//     age: 39,
//     car: 'AUDI',
//     department: 'History'
// };

// fs.writeFile('one.json', JSON.stringify(man), (err) => {
//     if (err) console.log('Error');
// });

//! 2 Case. Read json file

// console.log(student);

//! 3 Case. Read CSV file
const results = [];
fs.createReadStream("table.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
  });

//! 4 Case. Write CSV file
// const csvWriter = createCsvWriter({
//   path: "test.csv",
//   header: [
//     { id: "name", title: "NAME" },
//     { id: "lang", title: "LANGUAGE" },
//   ],
// });

// const records = [
//   { name: "Bob", lang: "French, English" },
//   { name: "Mary", lang: "English" },
//   { name: "Mark", lang: "Rus" },
//   { name: "Vova", lang: "Eng" }
// ];

// csvWriter
//   .writeRecords(records) // returns a promise
//   .then(() => {
//     console.log("...Done");
//   });