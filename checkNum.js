function checkNum(number){
    if(number>0){
        return "positive";
    }
    else if(number<0){
        return "negative";
    }
    else{
        return "zero"
    }
}

console.log(checkNum(1))
console.log(checkNum(-1))
console.log(checkNum(0))
