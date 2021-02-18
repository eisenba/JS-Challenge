// from data.js
var tableData = data;
console.log("data :: ", data);
// YOUR CODE HERE!
const tableBody = d3.select("#ufo-table tbody");
function runEnter() {
  // select the table
  var list = d3.select(".tbody");

  // remove any children from the list to
  list.html("")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = tableData.filter((sighting) => sighting.bloodType === inputValue);

// tableBody.html = "";
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

data.forEach((dataRow) => {
  let tableRow = tableBody.append("tr");
  cols.forEach((col) => tableRow.append("th").text(dataRow[col2Data[col]]));
});
