// ---------Show me how to calculate the average price of all items. Please console.log the average.

// ---------The average price is $23.63

// --- to find the average of a set of numbers, add them all together and divide by the number of items 
// --- the price of each item is contained within an object, within an array   "price": number,
// --- map the price for each object
// --- use the reduce function to add together all the items
// --- divide this number by the total number of prices

var theAnswer = 0;

//this part maps the price, grabbing all the values
var getPrice = items.map(function(costValue){
  return costValue.price;
});

var sumPrice = getPrice.reduce(function(total, item){
  return  total + item;
});