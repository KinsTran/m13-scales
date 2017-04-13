// Main JavaScript File

// Data to visualize (shoe sizes along the horizontal)
var data = [{
        name: 'Amelia',
        shoeSize: 10
    },
    {
        name: 'Analisa',
        shoeSize: 8
    },
    {
        name: 'Joanna',
        shoeSize: 7
    },
    {
        name: 'Ash',
        shoeSize: 9
    }
];

// Use d3.min and d3.max to determine the domain of your scale
var min = d3.min(data, function(d){return d.shoeSize})
var max = d3.max(data, function(d){return d.shoeSize})

// Define a linear scale with your data domain and an output range of 50, 500
var linearScale = d3.scaleLinear().domain([min, max]).range([50, 500])

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
    // Select SVG with id `my-svg` and assign it a width of 600 and a height of 100
    var svg = d3.select("#my-svg").attr("width", 600).attr("height", 100)
    // Define an axis for your scale with the ticks oriented on the bottom
    var axis = d3.axisBottom().scale(linearScale)
    // Append a `g` element to your svg, shift it down 50 pixels by setting the transform property, and call your `axis function`
    var g = svg.append("g").attr("transform", "translate(0, 50)").call(axis)
    // Append a circle for each element in your data by using the standard D3 data binding process
    var circles = svg.selectAll("circle").data(data)
    // Enter new circles
    circles.enter().append("circle").attr("cx", function(d){return linearScale(d.shoeSize)})
    .attr("cy", 25).attr("r", 15).style("fill", "green")
    // Draw circles

});