// 30 minutes max
// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentInfo(obj){
    for(var student of obj){
        console.log("Name: " + student.name + ", " + "Cohort: " + student.cohort)
    }
    return
};

studentInfo(students)

//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function userInfo(obj){
    for(var position in obj){
        positionTitle = position.toUpperCase();
        console.log(positionTitle)
        for (let i = 0; i < obj[position].length; i++) {
            var fullname = obj[position][i].first_name + obj[position].last_name
            console.log(i + " - " + obj[position][i].last_name + ", " + obj[position][i].first_name + " -- " + "(" + fullname.length + ")");
        }
    }
    return
 };

 userInfo(users)