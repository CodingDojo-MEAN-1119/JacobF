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