// from data.js
var tableData = data;
// YOUR CODE HERE!
const tableBody = d3.select("#ufo-table-body");
var button = d3.selectAll("#filter-btn");
var form = d3.select("#form")

// Event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
  // stop reload
  d3.event.preventDefault();
  // get form
  var inputElement = d3.select("#datetime");
   // get the date input
  var date = inputElement.property("value")
  // check for input and filter on date column 
  if(date) {
    filteredData = []
   filteredData = tableData.filter(row => row.datetime === date);
  };
const col2Data = {
  Date: "datetime",
  City: "city",
  State: "state",
  Country: "country",
  Shape: "shape",
  Duration: "durationMinutes",
  Comments: "comments",
};

const cols = [
  "Date",
  "City",
  "State",
  "Country",
  "Shape",
  "Duration",
  "Comments",
];
// Clear children in table
tableBody.html("");
// Add filtered rows to table
filteredData.forEach((dataRow) => {
  let tableRow = tableBody.append("tr");
  cols.forEach((col) => tableRow.append("th").text(dataRow[col2Data[col]]));
});

};
