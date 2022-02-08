console.log("JS exercise here");

//#1- create html file which will run this file, by importing(hint - look on google -"how to import external JS file into HTML")
//Open the html file
//#2
//Create object product with the properties: 
//name = milk, brand = "Strauss", price = 6.5 (number), isFood = true (boolean), quantity = 20

let product = {
    name: "milk",
    brand: "Strauss",
    price: 6.5,
    isFood: true,
}

//log it
console.log(`name (${product.name}) brand (${product["brand"]})price (${product.price})isFOOd (${product.isFood})`)

//#2.2 - write the below function as arrow function
function func1() {

}//--->
func1Arrow = () => {

}
//#3
//log the product name with dot notation and the brand name with bracket notation
let a = product.name;
let b = product['brand'];
console.log(a);
console.log(b);


//#4
//create array  of numbers by counting from 1 to ten, - with for.
//U should log at the end the array with the values - [1,2,3,4,... 10]
let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);



//#5
//create constructor function for creating a product, and create from this 3 products. 
//add function to the product object that log: "Milk of Strauss. 6.5 NIS" - for example 
//Add them to array "products" and log them with while condition 
function Product(name, brand, price, isFood, quantity) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.isFood = isFood;
    this.quantity = quantity;

    this.describe = function () {
        // console.log(name + " of "+ brand +". " + price + " NIS" );//other option
        console.log(`${this.name} of ${this.brand} costs ${this.price} NIS`);


    }

}

let p1 = new Product("Milk", "Tenuva", "7", true, 20);
let p2 = new Product("Tooth brush", "Colgate", 20, false, 15);
let p3 = new Product("Keyboard", "Logitec", 60, false, 26);
let products = [p1, p2, p3];
let i2 = 0;
while (i2 < products.length) {
    products[i2].describe();
    i2++
}


//#6
//create factory function for creating a product, and create from this 3 products. 
//Add them to array "products" and log them with for of condition 
console.log("Products by factory...");
function createProduct(name, brand, price, isFood, quantity) {
    return {
        name: name,
        brand: brand,
        price: price,
        isFood: isFood,
        quantity: quantity
    }
}

let factoryProduct1 = new createProduct("kroason", "maafiya", 4, true, 2);
let factoryProduct2 = new createProduct("kafa", "osem", 9.9, true, 3);
let factoryProduct3 = new createProduct("neskafe", "elite", 13, true, 1);


let factoryProducts = [];

factoryProducts.push(factoryProduct1);
factoryProducts.push(factoryProduct2);
factoryProducts.push(factoryProduct3);

for (fp of factoryProducts) {
    console.log(fp);
}

//#7
//Do for, that in each loop shows all prouct's properties, with its corresponding value. 
//for example: name = milk, brand = strauss, etc...

for (let fp of factoryProducts) {
    //fp is the object now we are iterating on it
    for (let property in fp) {//in instead of 
        console.log(`${property} = ${fp[property]}`);
    }
    console.log("--------------");
}


// }

//#8
//Do function that print all fibonacci numbers until parameter n. 
//For example 
function getFibonacci(x) {
    //write you code here... 

    if (x <= 0) { return }
    if (x == 1) { console.log(0); return }
    let y = x - 2;//removing the 2 first values.
    let arr = [0, 1];
    let prv = 0;
    let current = 1;
    while (y > 0) {
        let sum = prv + current;
        prv = current;
        current = sum;
        arr.push(sum);
        y--;
    }
    console.log(arr);
}
getFibonacci(10);

//the result should be : 
// 0,1,1,2,3,5... 
//see here what is fibonnaci https://projecteuler.net/problem=2


//those exercises will be done on the next lessons.... 

//***********************************Homework - optional********************************************//



//#9.1 -
//Take the attached excel and create with the values all the products that appear there. U can use either the constructor function or the factory function,
//that you have created earlier. 
// Add them to your products array 


//#9.2
/*
Do a function that searches on your products array the most expensive product and return it.
Constraints:  
- Use Math.max built in function of JS in this function. 
- Print it from outside, not from the function itself – the function should return only value!

Print by any loop that you prefer all the products with the values, and at the end the most expensive. 

for example :

milk : 5
candle: 10
bread : 7

the most expensive product is candle 
*/


//#10
//This function should return only the products of the provided brand from the provided products array. should return array of the product with the
//provided brand. For example getBrandProducts(products, "Tenuva") - should returns only the products of Tenuva
function getBrandProducts(products, brand) {
    //write your code here... 
}


