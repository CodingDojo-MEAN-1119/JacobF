function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    
    function trainStrength(strength_points){
        strength += strength_points
    };
    
    this.showStrength = function() {
        console.log(`${this.name}'s Strength: ${strength}`)
        return strength
    };

    function trainSpeed(speed_points){
        speed += speed_points
    };

    this.showSpeed = function() {
        console.log(`${this.name}'s Speed: ${speed}`)
        return speed
    };

    this.train_strength = function(strength_points){
        trainStrength(strength_points)
        console.log(`${this.name} trains their strength by ${strength_points}.`)
        return this
    };

    this.train_speed = function(speed_points){
        trainSpeed(speed_points)
        console.log(`${this.name} trains their speed by ${speed_points}.`)
        return this
    };
}

Ninja.prototype.sayHi = function(){
    console.log(`Hello! My name is ${this.name}!`)
    return this
};

Ninja.prototype.showStats = function(){
    stats = {};
    stats['Health'] = this.health
    stats['Strength'] = this.showStrength()
    stats['Speed'] = this.showSpeed()
    console.log(`${this.name}'s stats:`)
    console.log(stats)
    return this
};

Ninja.prototype.drinkSake = function(){
    this.health += 10
    console.log(`${this.name} drinks Sake! Health increased by 10!`)
    return this
};


//OUTPUT//
var ninja1 = new Ninja('Jake')
ninja1.train_strength(10)
ninja1.train_speed(5)
ninja1.showStrength()
ninja1.showSpeed()
ninja1.sayHi()
ninja1.drinkSake()
ninja1.showStats()