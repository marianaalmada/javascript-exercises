function getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {

    const oldestPerson = people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        
        if(oldestAge < currentPersonAge) {
            return currentPerson;
        } else {
            return oldest;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
