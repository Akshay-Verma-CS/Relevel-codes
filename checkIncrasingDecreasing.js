function solve(arr){
    n  = arr.length
    state = "undefined";
    for(i=1;i<n;i++){
        if(arr[i]>arr[i-1]){
            state = "increasing";
        }
        else if(arr[i]<arr[i-1] && state == "increasing"){
            return "neither increasing or decreasing"
        }
        else if(arr[i]>arr[i-1] && state == "decreasing"){
            return "neither increasing or decreasing"
        }
        else{
            state = "decreasing";
        }
    }
    return state
}

console.log(solve([1,2,3]))
console.log(solve([1,3,2]))
console.log(solve([3,2,1]))
