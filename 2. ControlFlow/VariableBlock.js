// let age = 30;

// if(true) {
//     console.log('Inside code block', age);
// }
// console.log('Outside code block', age);


// let age = 30;
// let name = 'john';

// if(true) {
//     let age = 45;
//     let name = 'emma';
//     console.log('Inside code block', age, name);
// }
// console.log('Outside code block', age, name);


// let age = 30;
// let name = 'john';

// if (true) {
//     age = 45;
//     name = 'emma';
//     console.log('Inside code block', age, name);
// }
// console.log('Outside code block', age, name);


// let age = 30;
// let name = 'john';

// if(true) {
//     let age = 45;
//     let name = 'emma';
//     console.log('Inside 1st code block', age, name);

//     if(true) {
//         console.log('Inside 2nd code block', age, name);
//     }
// }
// console.log('Outside code block', age, name);


const age = 30;
const name = 'john';

if(true) {
    const age = 45;
    const name = 'emma';
    console.log('Inside 1st code block', age, name);

    if(true) {
        const age = 80;
        const name = 'success';
        console.log('Inside 2nd code block', age, name);
    }
}
console.log('Outside code block', age, name);

