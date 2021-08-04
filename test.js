function Test(){
    this.a=1
}
var test=new Test(

)
Object.prototype.c=3
Test.prototype.b=2
console.log(test)

console.log( Test.prototype.__proto__)
console.log( Test.prototype===test.__proto__)
console.log('c' in test)
console.log(test.hasOwnProperty('a'))
console.log(test.constructor)