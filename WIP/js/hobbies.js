const hobbies = [
    {name : `reading`, lengthInYearsAtHobby : 52},
    {name : `swimming`,  lengthInYearsAtHobby : 1},
    {name : `gardening`,  lengthInYearsAtHobby : 5},
];
function printHobbyInfo(hobby){
    console.log(` ${hobby.name} for ${hobby.lengthInYearsAtHobby} years.`)
};
for (let index = 0; index < hobbies.length; index++) {
    const element = hobbies[index];
    printHobbyInfo(element)
}
function logHobbies(hobbyArray) {
    hobbyArray.forEach(hobby => {
        console.log(` ${hobby.name}: A hobby for ${hobby.lengthInYearsAtHobby} years.`);
    })
}
logHobbies(hobbies);

let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

let band2 = {
    name : 'Pink Floyd',
    city : 'London'
    country : 'UK',
    yearFormed : 1972,
    genres : 'Rock'
 
band2 = new object();
band2.name = ;