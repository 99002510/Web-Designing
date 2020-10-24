keyword = req.query.sCuisine;
searchCuisine = [];
hotel.forEach(element =>
{
    for (const key in element.cuisine)
    {
        if(keyword == element.cuisine[key])
        {
            searchCuisine.push(element.name);const { send } = require("process");

express = require("express");
app = express();

hotel = require("./hotel.json");

app.get("/details", function(req, res)
{
nameList = [];
hotel.forEach(element =>
{
    nameList.push(element.name) 
});
res.send(nameList);
})

app.get("/searchByCity", function(req, res)
{
keyword = req.query.sCity;
searchCity = [];
hotel.forEach(element =>
{
    if(keyword == element.city)
    {

        }
});
res.send(searchCity);
})


app.get("/searchByType", function(req, res)
{
keyword = req.query.sType;
searchType = [];
hotel.forEach(element =>
{
    if(keyword == element.type)
    {
        searchType.push(element.name); 
    }
});
res.send(searchType);
})

app.get("/searchByCuisine", function(req, res)
{
    }
});

res.send(searchCuisine);
)


app.listen(1234, function(req, res)
{
console.log("Server listening to port 1234");
})
