function canGetOutToPlay(temp,raining){
    if(temp>=20 && temp<=25 && !raining){
        return "go out and play";
    }
    else if(temp>=18 && temp<=20 && raining){
        return "be in play school";
    }
    else{
        return "stay in home";
    }
}

console.log(canGetOutToPlay(23,true))
console.log(canGetOutToPlay(23,false))
console.log(canGetOutToPlay(20,false))
