Promise.all([
    d3.json("data/consolidatedPrices.json"),
    d3.json("data/singapore-planning-areas-topojson.json"),
]).then(function(data) {
	let consolidatedPrices = data[0]
	let topojson = data[1]
	
	
}).catch(function(err) {
    console.error(err)
})
