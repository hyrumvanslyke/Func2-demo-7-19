////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
let add = (x,y) => x + y// creates a arrow function that adds two parameters
let subtract = (x, y) => x - y// creates a arrow function that subtracts two parameters
let multiply = (x, y) => x * y// creates a arrow function that multiplies two parameters
let divide = (x,y) => x / y// creates a arrow function that divides two parameters

let calculator = (x, y, callback) => {
  if(+x && +y){// if statement usng short hand to check if they are numbers
return callback(+x, +y)// passing integer forms of x and y to call back
  }else{
    console.log('Input real numbers bud!')// else clause to stop idiots 
  }
}
console.log(calculator(7, 9, multiply))// logged for testing; edit: zero does not work as intended

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
let applyPercentDiscount = (product, discount) =>{
  product.displayPrice = product.basePrice * (1 - discount)
}// created a function to take a percentage discount



let applyFlatRateDiscount = (product, discount) =>{
  product.displayPrice = product.basePrice - discount
}// created a function to take a flat rate dicount



// applyDiscounts(dogProducts, applyPercentDiscount, .2, 'all') THIS IS FOR ALL

// applyDiscounts(dogProducts, applyPercentDiscount, .2, 'category', 1) THIS IS FOR CATEGORY

// applyDiscounts(dogProducts, applyPercentDiscount, .2, 'inventory', null, 50) THIS IS FOR INVENTORY

let applyDiscounts = (arr, callback, discount, method, category, amount) =>{// creating a higher order fuction that accepts 6 params 

if(method === 'all'){// if statement if the all method is called

  arr.forEach((product) =>{// using the forEach method to take in a product and loop through the whole product if the above if statement is satisfied.

    callback(product, discount)
  })

}else if(method === 'category'){// if statement if the category method is called 

  arr.forEach((product) => {// using the forEach method to take in a product and loop through the whole product if the above if statement is satisfied.

    if(product.category === category){
      callback(product, discount)
    }
  })

}else if(method === 'inventory'){// if statement if the inventory is called

  arr.forEach((product) =>{// using the forEach method to take in a product and loop through the whole product if the above if statement is satisfied.

    if(product.inventory > amount){
      callback(product, discount)
    }
  })
}
}
// applyDiscounts(dogProducts, applyPercentDiscount, .2, 'all') THIS IS FOR ALL

// applyDiscounts(dogProducts, applyPercentDiscount, .2, 'category', 1) THIS IS FOR CATEGORY

// applyDiscounts(dogProducts, applyPercentDiscount, .2, 'inventory', null, 50) THIS IS FOR INVENTORY

console.log(dogProducts)
let advertisement = (product, amount) => {
  if(product.inventory > amount){
    console.log(`${product.name} is overstocked! discount is 50%`)
  }else{
    console.log(`${product.name} is now 10% off`)
  }
}
let runAds = (arr, amount, callback) =>{
  arr.forEach((product) => callback(product, amount))
}
runAds(catProducts, 35, advertisement)
////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
function makeSandwich(bread){
  let order = `You ordered a ${bread} sandwich with `
  return function(ingredients){
    ingredients.forEach((ingredient, index) =>{
      if(ingredients.length === 1){
        order += ingredient + '.'
      }else if(ingredients.length -1 === index){// checking to see if it is the final ingredient
        order += `and ${ingredient}.`
      }else{
        order += ` ${ingredient}, `
      }
    })
return order
  }
}

let makeWheatSandwich = makeSandwich('wheat')
let makeWhiteSandwich = makeSandwich('white bread')

let order1 = makeWheatSandwich(['turkey', 'bacon', 'lettuce'])
let order2 = makeWhiteSandwich(['ham'])
console.log(order1)
console.log(order2)