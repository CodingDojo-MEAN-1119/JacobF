// Problem #1
// Given
console.log(hello);                                   
var hello = 'world';          

// The interpreter reads
console.log(hello);         // logs undefined       
var hello = 'world';        //declares var hello to be "world"
 

// Problem #2
// Given
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// The interpreter reads
function test(){
	var needle = 'magnet';
	console.log(needle);
}
var needle = 'haystack';        // declares needle as "haystack"
test();                         //invokes test; logs "magnet"

// Problem #3
// Given
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// The interpreter reads
function print(){
	brendan = 'only okay';
	console.log(brendan);
}                               // function doesn't get invoked
var brendan = 'super cool';     // brendan = "super cool"
console.log(brendan);           // logs "super cool"

// Problem #4
// Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// The interpreter reads
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
var food = 'chicken';   // food = "chicken"
console.log(food);      // logs "chicken"
eat();                  //invokes eat(); food="half-chicken", logs "half-chicken"

// Problem #5
// Given
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// The interpreter reads
mean();             // throws an error because the variable mean hasn't been declared yet
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// Problem #6
// Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// The interpreter reads
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);    // logs undefined
var genre = "disco";   // genre = "disco"
rewind();              // invokes rewind(); logs "rock", logs "r&b"
console.log(genre);    // logs "disco"

// Problem #7
// Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// The interpreter reads
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
dojo = "san jose";      // dojo = "san jose"
console.log(dojo);      // logs "san jose"
learn();                // invokes learn(); logs "seattle", logs "burbank"
console.log(dojo);      // logs "san jose"

// Problem #8 (BONUS)
// Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

// The interpreter reads
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now"; // cannot change const variable, throws an error
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65)); // creates dojo object, with values name="Chicago", students=65. hiring= true
console.log(makeDojo("Berkeley", 0)); // throws an error because it falls into else if statement
    