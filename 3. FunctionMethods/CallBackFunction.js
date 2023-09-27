// callback function - a function inside a function

let people = ['greg', 'john', 'sam', 'petr', 'oscar', 'theo'];

const logPerson = (person, index) => {
    console.log(`${index} - ${person}`);
};

people.forEach(logPerson); 
