let userName = prompt("What is your name?");
let userAge = prompt("What is your age?");
let fruits = ['apple', 'orange', 'banana', 'kiwi', 'strowberry', 'peach', 'blueberry'];


if(userAge <= 18){
    let cookingSkill = confirm("Can you cook?");
    if (cookingSkill == true){
        alert("Your name is  " + userName + "  Your age is  " + userAge + "  You can cook!" + " "  + "Congrats!:)");
    }else{
        alert("Your name is  " + userName + "  Your age is  " + userAge + " " +  "You cant cook!;(" + " "  + "Dont worry");
    }
}else {
    let employmentStatus = confirm("Are you working??");
    if (employmentStatus  == true){
        let retirement = 60 - userAge;
        if(retirement <= 0){
            alert(userName + "  you already on retirement.");
        }else{
            alert(userName + "  you have  " + retirement + " years to retirement.");
        }      
    }else{
        let studentStatus = confirm("Are you a student?");
        if(studentStatus == true){
            alert("Good luck " + userName + "  in your lerning process!");
        }else{
            let userFruits = prompt("What fruit do you like?");
            let haveFruit = false;
            for(let i = 0; i < fruits.length; i++){
                if(fruits[i] == userFruits){
                    haveFruit = true;
                    alert("We have it!");
                    break;
                }else{
                    alert("We dont have it!");
                    break;
                }
            }
        }
    }
}