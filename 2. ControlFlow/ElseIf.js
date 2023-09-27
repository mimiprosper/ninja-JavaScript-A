const passWord = 'pass5555555555'

// if (passWord.length >= 8) {
//     console.log('pass word strong');
// } else {
//     console.log('pass word weak');
// }

if (passWord.length >= 12) {
    console.log('pass word superb');    
} else if (passWord.length >= 8) {
    console.log('pass word strong');
} else {
    console.log('pass word weak');
}