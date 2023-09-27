// Logical Operators - && (add), || (or)

const passWord = 'pass@6uuuu';

// meets 2 conditions
if (passWord.length >= 12 && passWord.includes('@')) {
    console.log('pass word superb');  

// meets any 1 of the 2 conditions      
} else if (passWord.length >= 8 || passWord.includes('@')) {
    console.log('pass word strong');

// executes when the 2 above conditions fail
} else {
    console.log('pass word weak');
}