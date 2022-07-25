/*Callbacks*/

function sum (num1,num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1,num2);
};

console.log(calc(4, 5, sum));

setTimeout( () => {
    console.log('Hola Javascript');
}, 5000);

function getting(name){
     console.log(`Hola ${name}`);
}

setTimeout(getting, 2000, 'Andres');

