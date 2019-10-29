function coinChange(amount){
    var coins = [25,10,5,1];
    var results = [];
    for(var value of coins){
        var count = Math.floor(amount/value)
        amount = Math.floor(amount%value)
        results.push(count)
    }
    var changeBack = {
        'quarters': results[0],
        'dimes': results[1],
        'nickels': results[2],
        'pennies': results[3]
    }
    return changeBack
}
console.log(coinChange(73))