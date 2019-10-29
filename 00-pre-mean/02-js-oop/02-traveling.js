//Hundred Acre Wood Map
var eeyore = {character: "Eeyore"};
var heffalumps = {character: "Heffalumps"};
var kanga = {character: "Kanga"};

eeyore.east = heffalumps
eeyore.south = kanga
heffalumps.west = eeyore
kanga.north = heffalumps.west
//row 1 map assigned
var owl = {character: "Owl"};
var cRobin = {character: "Christopher Robin"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};

kanga.south = cRobin
owl.east = cRobin
cRobin.north = kanga
cRobin.west = owl
cRobin.east = rabbit
rabbit.west = cRobin
rabbit.east = gopher
gopher.west = rabbit
//row 2 map assigned
var piglet = {character: "Piglet"};
var winnie = {character: "Winnie the Pooh"};
var bees = {character: "Bees"};

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
var tigger = {character: "Tigger"};
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
console.log(player.location)