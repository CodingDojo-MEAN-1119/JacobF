function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    
    function trainStrength(strength_points){
        strength += strength_points
    };
    
    this.showStrength = function() {
        return strength
    };

    function trainSpeed(speed_points){
        speed += speed_points
    };

    this.showSpeed = function() {
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

Ninja.prototype.punch = function(ninja){
    if(ninja instanceof Ninja){
        if(this == ninja){
            punch_damage = 5
            this.health -= punch_damage
            console.log(`Whoops! ${this.name} punched themself for ${punch_damage} damage!`)
        } else{
            punch_damage = 5
            ninja.health -= punch_damage
            console.log(`${this.name} punched ${ninja.name} for ${punch_damage} damage!`)
            return this
        }
    } else {
        console.log("Invalid ninja object passed as parameter")
        return this
    }
};

Ninja.prototype.kick = function(ninja){
    if(ninja instanceof Ninja){
        if(this == ninja){
            kick_damage =  5 * this.showStrength()
            this.health -= kick_damage
            console.log(`Whoops! ${this.name} kicked themself for ${kick_damage} damage!`)
            return this
        } else{
            kick_damage =  5 * this.showStrength()
            ninja.health -= kick_damage
            console.log(`${this.name} kicked ${ninja.name} for ${kick_damage} damage!`)
            return this
        }
    } else{
        console.log("Invalid ninja object passed as parameter")
        return this
    }
};



//OUTPUT//
const ninja1 = new Ninja('Jake')
ninja1.train_strength(10)
ninja1.train_speed(5)
ninja1.showStrength()
ninja1.showSpeed()
ninja1.sayHi()
ninja1.drinkSake()
ninja1.showStats()
const ninja2 = new Ninja('test')
ninja1.punch(ninja2)
ninja2.showStats()
ninja2.kick(ninja2)
ninja1.showStats()
ninja2.showStats()
ninja1.kick(ninja2)
ninja2.showStats()