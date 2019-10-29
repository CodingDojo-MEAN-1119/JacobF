//Hundred Acre Wood Map WITH new greeting function
var eeyore = {
    character: "Eeyore",
    greet: function() {
        console.log("Thanks for noticing me. *slowly*")
    }
};
var heffalumps = {
    character: "Heffalumps",
    greet: function() {
        console.log("Heffa nice day!")
    }
};
var kanga = {
    character: "Kanga",
    greet: function() {
        console.log("Have you seen roo??")
    }
};

eeyore.east = heffalumps
eeyore.south = kanga
heffalumps.west = eeyore
kanga.north = heffalumps.west
//row 1 map assigned
var owl = {
    character: "Owl",
    greet: function() {
        console.log("I'm so smart... I'm smarter than you!")
    }
};
var cRobin = {
    character: "Christopher Robin",
    greet: function() {
        console.log("Silly bear!")
    }
};
var rabbit = {
    character: "Rabbit",
    greet: function() {
        console.log("Look at what you've done to my garden!")
    }
};
var gopher = {
    character: "Gopher",
    greet: function() {
        console.log("This will require some digging.")
    }
};

kanga.south = cRobin
owl.east = cRobin
cRobin.north = kanga
cRobin.west = owl
cRobin.east = rabbit
rabbit.west = cRobin
rabbit.east = gopher
gopher.west = rabbit
//row 2 map assigned
var piglet = {
    character: "Piglet",
    greet: function() {
        console.log("Oh d-d-d-dear!")
    }
};
var winnie = {
    character: "Winnie the Pooh",
    greet: function() {
        console.log("Do you have any honey?")
    }
};
var bees = {
    character: "Bees",
    greet: function() {
        console.log("BZZZZZZZ")
    }
};

owl.south = piglet
cRobin.south = winnie
rabbit.south = bees
piglet.north = owl
piglet.east = winnie
winnie.north = cRobin
winnie.west = piglet
winnie.east = bees
bees.north = rabbit
bees.west = winnie
//row 3 map assigned
var tigger = {
    character: "Tigger",
    greet: function() {
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
    }
};
winnie.south = tigger
tigger.north = winnie
//row 4 map assigned

//Traveling assignment
var player = {
    location: tigger
}

function playerMove(direction){
    var dir = direction.toLowerCase()
    var currentLocation = player.location
    var newLocation;
    var possibleDir = ["north", "south", "west", "east"];
    for(var i = 0; i < possibleDir.length; i++){
        if(dir == possibleDir[i]){
            if(possibleDir[i] == "north"){
                newLocation=player.location.north;
            }
            if(possibleDir[i]=="south"){
                newLocation=player.location.south;
            }
            if(possibleDir[i]=="west"){
                newLocation=player.location.west;
            }
            if(possibleDir[i]=="east"){
                newLocation=player.location.east;
            }
            if(player.location=newLocation){
                player.location=newLocation;
                console.log("You are now at "+newLocation.character+"'s house. ");
                newLocation.greet();
            } else {
                player.location = currentLocation
                console.log("You can not go that way!")
            }
        }
    }
    return player
}

playerMove('north');
playerMove('north');
playerMove('west');
playerMove('north');