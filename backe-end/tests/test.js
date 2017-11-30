var test = require("tape");
var handler = require("../handler.js");
var {
  getResults
} = handler;
var allData = ["Jerusalem",
  "Haifa",
  "Gaza",
  "Bethlehem",
  "Akka",
  "Jaffa",
  "Rafah"
];


test("test getResults function", (t) => {
  t.deepEqual(getResults(allData, "G"), ["Gaza"], "all name start with char G");
  t.end();
});
