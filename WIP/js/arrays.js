let hobbies = [`reading`,`swimming`,`gardening`];

function printHobbies(hobbyList) {
    console.log(`I like ${hobbyList.length} things:`);
    for (let ix = 0; ix < hobbyList.length; ix++) {
        console.log(`I like ${hobbyList[ix]}`);
    }
}printHobbies(hobbies);

