// const speak = function(name ) {
//     console.log(`good ${name}`);
// }

// speak('mario');


// usig default values as arguments/parameters
// const speak = function(time = 'night', name = 'fred') {
//     console.log(`good ${time}, ${name}`);
// }

// speak();


// overiding default values as arguments/parameters
const speak = function(time = 'night', name = 'fred') {
    console.log(`good ${time}, ${name}`);
}

speak('night', 'success');
