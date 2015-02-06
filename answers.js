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


// --- sort them by items with a price greater than/equal to  $14.00 and less than/equal to $18.00 USD
// --- return this in an array beginning with a string that states : Items that cost between $14.00 USD and $18.00 USD:
*/



var cheap = items.filter(function(stuff){
  return stuff.price >= 14 && stuff.price <= 18;
});


/* Show me how find the item with a "GBP" currency code and print its name and price. 
Please console.log the one you find.

1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

*/



var getItem = items.filter(function(product){
  return product.currency_code === "GBP";
});

var theAnswer = getItem[0].title + " £" + getItem[0].price;


/* Show me how to find which items are made of wood. 
Please console.log the ones you find. */

// "materials" contains the wood designation for a product
// console log the titles
// must add "is made of wood" at the end of te sentence



var someThing = items.map(function(item){
  return item.materials;
});

var myArray = someThing;

var containsWood = function(myArray) {
  var theAnswer = false;
  myArray.forEach(function(currentMaterial){
      if (currentMaterial === "wood") {
        theAnswer = true;
      }
  })
  return theAnswer;
};














