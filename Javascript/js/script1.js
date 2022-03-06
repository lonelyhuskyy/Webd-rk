// var a= {x:7};
// var b= a;
// console.log(a);
// console.log(b);
// b.x=5;
// console.log("after updating")
// console.log(a);
// console.log(b);

//Function Constructors- used to create objects

// function Cirlce(radius)
// {
//     console.log(this);
//     this.radius= radius;
//     this.getArea= 
//     function (){
//         return Math.PI * Math.pow(this.radius, 2);
//     };
// }

// // Cirlce.prototype.getArea= 


// var myCircle= new Cirlce(10);
// console.log(myCircle.getArea());

//Fake namespaces

// var RaghavGreeter= {};
// RaghavGreeter.name= "Raghav";
// RaghavGreeter.sayshello = function() {
//     console.log("Hello" + RaghavGreeter.name);
// }

(function(window)
   {var RaghavGreeter={};
      RaghavGreeter.name="Raghav";
      RaghavGreeter.saysHi= function()
      {
          console.log("Hi " + RitikaGreeter.name);
      }
      window.RaghavGreeter= RaghavGreeter;
   }
)(window);

