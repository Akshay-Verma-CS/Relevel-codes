function getGrade(marks){
    if( marks >= 90 )
    return "A"
    else if( marks >= 80 )
    return "B"
    else if( marks >= 60 )
    return "C"
    else if( marks >= 33 )
    return "D"
    else
    return "F"
}

console.log(getGrade(56))
