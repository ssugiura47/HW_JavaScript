//- Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// from data.js
var tbody = d3.select("tbody");
var tableData = data;

// YOUR CODE HERE!
// Console.log the ufo_data) from data.js
console.log(tableData);

//Loop Through `data` and console.log each ufo object
tableData.forEach(function(ufo_data){
    var addRow = tbody.append('tr')
    Object.entries(ufo_data).forEach(function([x,y]){
        addRow.append('td').text(y);
    })
});

// - Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
var button = d3.select("#filter-btn");
var form = d3.select('#form');

function filterData(users, filter){
    d3.event.preventDefault();
 
    var inputDate = d3.select('#datetime').property("value")
    var inputCity = d3.select('#filter_city').property("value")
    var inputState = d3.select('#filter_state').property("value")
    var inputCountry = d3.select('#filter_country').property("value")
    var inputShape = d3.select('#filter_shape').property("value")
    
    console.log(inputDate)
    console.log(inputCity)
    console.log(inputState)
    console.log(inputCountry)
    console.log(inputShape)

    if (inputDate != null){
        var tableFilterDate = tableData.filter(ufo => ufo.datetime === inputDate.toLowerCase())};
    if (inputCity != ""){
        var tableFilterDate = tableData.filter(ufo => ufo.city === inputCity.toLowerCase())};
    if (inputState != ""){
        var tableFilterDate = tableData.filter(ufo => ufo.state === inputState.toLowerCase())};
    if (inputCountry != ""){    
        var tableFilterDate = tableData.filter(ufo => ufo.country === inputCountry.toLowerCase())};
    if (inputShape != ""){
        var tableFilterDate = tableData.filter(ufo => ufo.country === inputShape.toLowerCase())};    

    console.log(tableFilterDate)

    tbody.html("")
    tableFilterDate.forEach(function(ufo_data){
        var addRow = tbody.append('tr')
        Object.entries(ufo_data).forEach(function([x,y]){
            addRow.append('td').text(y);
        })
    });

};


button.on('click', filterData)