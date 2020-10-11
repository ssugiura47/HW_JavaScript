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

function buttonClicked(){
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime');

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);
    
    var tableDataFiltered = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(tableDataFiltered);

    tbody.html("")

    tableDataFiltered.forEach(function(ufo_data){
        var addRow = tbody.append('tr')
        Object.entries(ufo_data).forEach(function([x,y]){
            addRow.append('td').text(y);
        })
    });
    // var DataFiltered = tableData.filter(ufo => ufo.datetime != inputValue); 
    // console.log(DataFiltered);

    // return DataFiltered.forEach(function(ufo_data){
    //     delete ufo_data
    // });

};


button.on('click', buttonClicked)

