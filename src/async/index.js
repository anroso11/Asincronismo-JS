const asyFuct = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async'),2000 )
        : reject(new Error('Error!'));
    })   
}

const actFuct = async () => {
    const someThing = await asyFuct();
    console.log(someThing);
    console.log('Prueba Async')
}

console.log('Before');
actFuct();
console.log('After');