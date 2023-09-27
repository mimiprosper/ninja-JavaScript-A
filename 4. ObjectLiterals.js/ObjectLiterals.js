let Teacher = {
    name: 'success',
    age: 45,
    location: 'aba',
    email: 'emma@yahoo.com',
    blog: ['teachers guide', 'oliver twist', 'art of war', '10 commandents']
};

console.log(Teacher);
console.log(Teacher.name);

// overriding the property name
// Teacher.name = 'emma'; 
Teacher['name'];
console.log(Teacher.name);
console.log(Teacher['name']);
