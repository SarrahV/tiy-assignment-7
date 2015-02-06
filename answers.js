// ---------Show me how to calculate the average price of all items. Please console.log the average.

// ---------The average price is $23.63

// --- to find the average of a set of numbers, add them all together and divide by the number of items 
// --- the price of each item is contained within an object, within an array   "price": number,
// --- map the price for each object
// --- use the reduce function to add together all the items
// --- divide this number by the total number of prices



var getPrice = items.map(function(costValue){
  return costValue.price;
});

var sumPrice = getPrice.reduce(function(total, item){
  return  total + item;
});

var avPrice = "The average price is $ " + (sumPrice / 25).toFixed(2);



// ----------Show me how to get an array of items that cost between $14.00 and $18.00 USD

/*"Items that cost between $14.00 USD and $18.00 USD:"
[
{
  title: "1970s Coors Banquet Glass Beer Pitcher",
  ...
},
{
  title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
  ...
},
{
  title: "Hand Painted Colorful Feather Glass",
  ...
}
]

// --- final output needs to be items with details, not just the price! - Grab all keys
// --- filter for title and price
// --- sort them by items with a price greater than/equal to  $14.00 and less than/equal to $18.00 USD
// --- return this in an array beginning with a string that states : Items that cost between $14.00 USD and $18.00 USD:
*/



//for each to call all the items into an array????


var getItems = items.map(function(allItems){
  return allItems.price;
}, []);


//returns array of objects keys in order given
var keys = items.keys(items);

for (var i = 0; i < keys.length; i++) {
    var val = items[keys[i]];
}







/*var sort = getItems.filter(function(specItems){
  return specItems <=
})*/









