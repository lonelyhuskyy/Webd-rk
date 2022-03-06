// Arrays

// var array= new Array();
// array[0]= "John";
// array[1]= "joe";
// array[2]= "hoe";

// for(var i=0; i < array.length; i++ )
// {
//     console.log("Hello " + array[i]);
// }

// var myObj= {
//     Name: "Raghav",
//     Course: "HTML/CSS/JS",
//     Provider: "Coursera"
// } ;

// for(var prop in myObj)
// {
//     console.log(prop + ": " + myObj[prop]);
// }

// var JohnGreeter= {};
// JohnGreeter.name= "John";
// JohnGreeter.sayshi= function(){
//     console.log("Hi" + JohnGreeter.name);
// }

(function(window)
    {
       var RitikaGreeter={};
       RitikaGreeter.name="Ritika";
       RitikaGreeter.saysHello= function(){
       console.log("Hello " + RaghavGreeter.name);
       }
       window.RitikaGreeter= RitikaGreeter;
    }
)(window);
//Immediately invoked function and using window to expose it to window object