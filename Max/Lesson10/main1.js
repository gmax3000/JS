//const { text } = require("wd/lib/commands");

const write = () =>  {
    console.log("Hey whats up?");
  
}

const notify = (text) => {
    alert("This is " + text);
}

const notify2 = () => {
    alert("This is double click");
}

const setTextToMyCoolBtn = function(text){
    const ddiv = document.getElementById('my-cool-btn');
    ddiv.innerHTML = text
}

const setTextToMyCoolButton = function(text){
    const ddiv = document.getElementById('my-cool-button');
    ddiv.innerHTML = text
}

const sum = function(num1, num2, num3){
   let result = num1+num2+num3;

   return result;
}

console.log(sum(5,3,4));

const checkAge = function(age, name){
    if(age < 18){
       return (name + "   you are too yong");
    } 
       return (name + "   your age good to go");
}

console.log(checkAge(17, 'yyy'));
console.log(checkAge(19, 'uuu'));



