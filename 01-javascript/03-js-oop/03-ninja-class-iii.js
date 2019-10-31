class Ninja {
    constructor(name){
        this.name = name
        this.health = 100
        this.strength = 3
        this.speed = 3
    }

    sayName(){
        console.log(`Hello! My name is ${this.name}!`)
        return this
    }

    showStats(){
        var stats = {};
        stats['Health'] = this.health
        stats['Strength'] = this.strength
        stats['Speed'] = this.speed
        console.log(`${this.name}'s Stats:`)
        console.log(stats)
        return this
    }

    drinkSake(){
        this.health += 10
        console.log(`${this.name} drinks some Sake! Their health is increased by 10!`)
        return this
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name)
        this.health = 200
        this.strength = 10
        this.speed = 10
        this.wisdom = 10
    }

    speakWisdom(){
        super.drinkSake()
        console.log("Wise message")
        return this
    }
}

var ninja1 = new Ninja("Jake")
ninja1.sayName().drinkSake().showStats()
var sensei1 = new Sensei("Test")
sensei1.sayName().showStats().speakWisdom().showStats()