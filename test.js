// function Test(){
//     this.a=1
// }
// var test=new Test(

// )
// Object.prototype.c=3
// Test.prototype.b=2
// console.log(test)

// console.log( Test.prototype.__proto__)
// console.log( Test.prototype===test.__proto__)
// console.log('c' in test)
// console.log(test.hasOwnProperty('a'))
// console.log(test.constructor)

var btn=document.getElementById('btn')

btn.onclick=function() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  };


var btn1 = document.getElementById('btn1')
btn1.onclick=function() {
   const rem= document.getElementsByTagName('div')
   for (var i=0; i<rem.length; i++){
        alert(rem.parentElement)
   }
 
   
}