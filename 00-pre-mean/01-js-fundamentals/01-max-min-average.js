function maxMinAvg(arr){
    var sum = 0
    var max = arr[0]
    var min = arr[0]
    for(var i=0;i<arr.length;i++){
        sum += arr[i]
        if(arr[i]>max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }
    var avg = sum / arr.length
    return "The max is " + max + "." + " The min is " + min + "." + " The average is " + avg + "."
}

console.log(maxMinAvg([1,2,30,0,4]))