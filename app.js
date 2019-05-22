// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// MAKE THE TABLE STRIPED
var tablestriped = d3.select("#ufo-table");
tablestriped.attr("class", "table table-striped");

d3.selectAll("#filter-btn").on("click", function () {
  d3.selectAll("td").remove();
  var DateElement = d3.select('#datetime');
  var dateValue = DateElement.property("value");
  function SelectDate(keyDate) {
    return keyDate.datetime === dateValue;
  }
  var dateout = data.filter(SelectDate);
  console.log(dateout);


  dateout.forEach(function (row) {
    var new_row = tbody.append("tr");
    new_row.append("td").text(row.datetime);
    new_row.append("td").text(row.city);
    new_row.append("td").text(row.state);
    new_row.append("td").text(row.country);
    new_row.append("td").text(row.shape);
    new_row.append("td").text(row.durationMinutes);
    new_row.append("td").text(row.comments);
  });
  d3.event.preventDefault();
});