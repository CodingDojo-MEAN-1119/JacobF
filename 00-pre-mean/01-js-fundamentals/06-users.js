users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
];

// Return a string that lists all the users by first name and last name and the languages that each user knows. 
// Make the string as nicely formatted as possible so that it is easy to read.

function userLanguages(users){
    for(var user of users){
        var languages = "";
        for(var i = 0; i < user.languages.length; i++){
            if(i == user.languages.length-1){
                languages += "and " + user.languages[i] + "."
            } else{
                languages += user.languages[i]+", ";
            }
        }
        console.log(user.fname + " " + user.lname + " is familiar with the languages; " + languages)
    }
    return "Function userLanguages has finished executing"
}
userLanguages(users)