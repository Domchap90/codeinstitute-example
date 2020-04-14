
const url = 'https://ci-swapi.herokuapp.com/api/';

function getData(url, cb) {
var xhr = new XMLHttpRequest(); 
              
xhr.open('GET', url);
xhr.send();                    

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status ==200) {
        cb(JSON.parse(this.responseText));
        }  // listener
    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);   // gets all table headers in array.
    });
    return `<tr>${tableHeaders}</tr>`; // returns them in a single row.
}

function generatePaginationButtons(next, prev) {
    if(next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
                <button onclick="writeToDocument('${next}')">Next</button>`;
        } else if (next && !prev) {
            return `<button onclick="writeToDocument('${next}')">Next</button>`;
        } else {
            return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
        }
    
}

function writeToDocument(url){
    var tableRows = [];     // initiates row for values associated with key in JSON.
    var el = document.getElementById("data");
    el.innerHTML = "";  // clears preexisting data before adding more to the current row.

    getData(url, function(data){
        var pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next,data.previous)
        }
        data = data.results;
        //console.dir(data);
        var tableHeaders = getTableHeaders(data[0]);    // calls function to get headers of table for data in the div.

        data.forEach(function(item){
            var dataRow = [];

            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0,15);    // formats so nicely fits in column - all same size.
                dataRow.push(`<td>${truncatedData}</td>`); // creates row.
            })
            tableRows.push(`<tr>${dataRow}</tr>`); // push row to array
        });
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g, "");
    });
}
