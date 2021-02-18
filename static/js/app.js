// from data.js
var tableData = data;
//console.log("data :: ", data);
// YOUR CODE HERE!
const tableBody = d3.select("#ufo-table tbody");
var button = d3.selectAll("#filter-btn");
var form = d3.select("#form")

// Event handlers
button.on("click", runEnter);
form.on("submit", runEnter);





function runEnter() {
  d3.event.preventDefault();
  // remove any children from the list
   tableBody.html = "";
  // get form
  var inputElement = d3.select("#datetime");
   // get the date input
  var date = inputElement.property("value")
   if(date) {
   filteredData = tableData.filter(row => row.datetime === date);
  console.log(filteredData)
  };




let tableRow = tableBody.append("tr");
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

filteredData.forEach((dataRow) => {
  let tableRow = tableBody.append("tr");
  cols.forEach((col) => tableRow.append("th").text(dataRow[col2Data[col]]));
});

};
