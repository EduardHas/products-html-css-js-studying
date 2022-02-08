console.log("products draft here ");

let x = 10;
let y =x;

x = 20;

console.log("y = " , 10 );

//Create object product with the properties: 
//name = milk, brand = "Strauss", price = 6.5 (number), isFood = true (boolean)

let product = {
    name: "milk", brand: "Strauss", price : 6.5, isFood: true, quantity: 10
}
console.log("product = ", product);

// console.table( product);


//log the product name with dot notation and the brand name with bracket notation

console.log(product.name + "," + product['brand']);

//create array by counting from 1 to ten, of numbers - with for.
//U should log at the end the array with the values - [1,2,3,4,... 10]

let arr1 = [];

for (let i = 1 ; i <=10 ; i++){
    arr1.push(i);
}
console.log("arr1 ", arr1);

//create constructor function for creating a product, and create from this 3 products. 
//add function to the product object that log: "Milk of Strauss. 6.5 NIS" - for example 

//Add them to array "products" and log them with while condition 

function Product(name, brand, price, isFood, quantity){
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.isFood = isFood;
    this.quantity = quantity;

    this.describe = function(){
        // console.log(name + " of "+ brand +". " + price + " NIS" );//other option
        console.log(`${this.name} of ${this.brand} is costs ${this.price}NIS`);


    }
     
}

let p1 = new Product("Milk", "Tenuva", "7", true, 20);
let p2 = new Product("Tooth brush", "Colgate", 20, false, 15);

console.log(p1, " , ", p2);

p1.describe();


//We here

//create factory function for creating a product, and create from this 3 products. 
//Add them to array "products" and log them with for of condition 

function ProductFactory(name, brand, price, isFood, qty) {
    return {
        name: name,
        brand: brand,
        price: price,
        isFood: isFood,
        qty: qty,
        describe: function () {
            console.log(`${this.name} of ${this.brand} is costs ${this.price}NIS`)
        }
    }

}
let products = []
let product0 = ProductFactory("Milk", "Strauss", 6.5, true, 100);
product0.describe();

let product1 = ProductFactory("pizza", "Rita", 16.3, true, 200);
product1.describe();

let product2 = ProductFactory("Burger", "BBB", 9.5, true, 100);
product2.describe();

products.push(product0, product1, product2);


//Do for that in each loop show all prouct's properties, with its corresponding value. 
//for example: name = milk, brand = strauss, etc...

for(let product of products){
    console.log("product of = " , product  );
}


let i = {
    value: 0
}

while (i.value < products.length) {
    console.log(products[i.value])
    i.value++
}
let bool1 = "true";
let index = 0;
// while (bool1 === "true") {
//     console.log("whilke?");
//     let product2 = products[i];
//     for(property in product2){
//         console.log(property + " = " + product2[property]);
//     }
//     i++;

//     if(i == products.length){
//         bool1 = "false";
//     }


// }




//Do function that print all fibonacci numbers until parameter n. 
//For example 
function getFibonacci(n){
    let i = 0;
    let number = 0;
    let previousNum = 0;
    let previosOfPreviosNumber = 0;
    while (i <= n){

        if(i==0){
            number = 1;
        }
        else if (i==1){
            number = 2;
            previousNum = 2;
            previosOfPreviosNumber = 1;
        }
        else{

            number = previousNum + previosOfPreviosNumber;
            previosOfPreviosNumber = previousNum;
            previousNum = number;
        }
        console.log(number + ",");
        i++;

    }
    //do write you code here 
}
getFibonacci(20);

//the result should be : 
// 0,1,1,2,3,5... 
//see here what is fibonnaci https://projecteuler.net/problem=2



////task 4 

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

//This function should return only the products of the provided brand from the provided products array. should return array of the product with the
//provided brand. For example getBrandProducts(products, "Tenuva") - should return only the products of Tenuva
function getBrandProducts(products, brand){
    //do something...
}

let getBrandProducts2 = (products, brand) => {
    //do something
}
x = 10;
console.log(x);

let func = function(){

}


/*


*/