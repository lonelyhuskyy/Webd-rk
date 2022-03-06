// // var x= "Hello";
// // x += " World !";
// // console.log(x);

// // var x='4', y=4;
// // if(x===y)
// // {
// //     console.log("x='4' is equal to y=4");
// // }
// // else{
// //     console.log("x='4' isn't equal to y=4");
// // }

// // var string= "Hello";
// // console.log(string + " World !");

// // var company= new Object();
// // company.name ="Facebook";
// // company.ceo= new Object();
// // company.ceo.firstName="Mark";
// // company["stock of company"]=110;
// // console.log("Stock price is: " + company["stock of company"]);

// //Better way to create objects

// var facebook= {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         lastName: "Zuckerberg"
//     },
//     "stock of company": 110
// };
// console.log(facebook["stock of company"]);

// function add(x,y)
// {
//     return x+y;
// }
// console.log(add(2,3));
// add.version= "v1.1.0.0";
// console.log(add);

// function makeMultiplier(multiplier){
//     var myFunc= function(x){
//         return multiplier*x;
//     };

//     return myFunc;
// }

// var multiplyBy3= makeMultiplier(3);
// console.log(multiplyBy3(4));

// var doubleAll= makeMultiplier(2);
// console.log(doubleAll(5));

// function doOperationOn(x, operation)
// {
//     return operation(x);
// }
// var result= doOperationOn(5, doubleAll);
// console.log(result);

// RaghavGreeter.sayshello();
// JohnGreeter.sayshi();


// function makeMultiplier(multiplier)
// {
    
//     return function myFunc(x){
//         return multiplier*x;
//     };
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));

//Fake namespaces

RaghavGreeter.saysHi();
RitikaGreeter.saysHello();

//Immediately invoked function (IIFE)
(function(name){
    console.log("Hello " + name);
})("Coursera!");