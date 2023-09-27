// function declaration
function greet() {
    console.log('hello world');
}

greet();
hoist() // hositing - function called before declaration. it works with function declaration

// function express
const speak = function(){
    console.log('talk talk');
};

speak()

// hositing - function called before declaration. its doesnt work with function declaration
function hoist() {
    console.log('hoisting, its used only in function declaration. called before function declaration');
}
