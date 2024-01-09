// console.log('Before promise');
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject('error');
//     }, 500);
// })
//     .catch(function (error) {
//         console.log('Then returned: ' + error);
//     });
// console.log('After promise');

const response = fetch("https://authors-91cc4-default-rtdb.europe-west1.firebasedatabase.app/.json");

response.then(res => res.json()
    .then(res => console.log(res.booksCounter))
)