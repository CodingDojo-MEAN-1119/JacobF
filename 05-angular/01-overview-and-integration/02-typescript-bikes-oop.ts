class Bike {
  price: number
  max_speed: number
  miles: number

  constructor(price: number, max_speed: number){
    this.price = price
    this.max_speed = max_speed
    this.miles = 0
  }

  displayInfo(){
    console.log(`This bike costs $${this.price}. Its max speed is ${this.max_speed} and it has ${this.miles} miles on the odometer.`)
    return this
  }
  ride(){
    this.miles += 10
    console.log("Riding!")
    return this
  }
  reverse(){
    this.miles -= 5
    console.log("Reversing!")
    return this
  }

};

const bike1 = new Bike(155.99, 20)
bike1.ride().ride().ride().reverse().displayInfo()
const bike2 = new Bike(99.99, 15)
bike2.ride().ride().reverse().reverse().displayInfo()
const bike3 = new Bike(75.99, 10)
bike3.reverse().reverse().reverse().displayInfo()
