// function wait() {
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000, 'resolve');
//     })
// }

// (async function solve(params) {
//     console.log('before promise');

//     await wait()//.then((response)=> console.log(response));

//     console.log('after promise');
// })()

console.log('before');
setTimeout(() => console.log('done after 5s'), 5000);
console.log('after');
setTimeout(() => console.log('done after 2 more seconds'), 2000);
(function returnsItself(params) {
    return returnsItself();
})()