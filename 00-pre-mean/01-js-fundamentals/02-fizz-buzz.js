function fizzBuzz(n){
    if(n<1){
        console.log("Parameter must be a positive integer")
    }
    var returnString = "";
    for(var i=1;i<=n;i++){
        if(i % 3 == 0 && i % 5 == 0){
            if(i==n){
                returnString += "and " + "Fizzbuzz."
            }   else{
                returnString += "Fizzbuzz" + ", "
            }
        }   else if(i%3==0 && i%5!=0){
            if(i==n){
                returnString += "and " + "Fizz."
            }   else {
                returnString += "Fizz" + ", "
            }
        }   else if(i%5==0 && i%3!=0){
            if(i==n){
                returnString += "and " + "Buzz."
            }   else {
                returnString += "Buzz" + ", "    
            }
        }   else {
            if(i==n){
                returnString += "and " + i + "."
            }   else {
                returnString += i + ", "                
            }
        }
    }
    return returnString
}

console.log(fizzBuzz(15))