
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('params must be numbers');
            }
        }, 1500)
    })
};



asyncAdd(5,7).then((result)=>{
    console.log('result : ',result);
    return asyncAdd(result,33);
}).then((result) => {
    console.log('should be 45 : ',result);
}).catch((errorMessage)=> {
    console.log(errorMessage);
});


    //return asyncAdd(sum,33));

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hey it worked!');
//         // reject('unable to fulfill promise');
//     }, 2500)
// });

// somePromise.then((message) => {
//     console.log('success : ', message);
// }, (errorMessage) => {
//     console.log('failure :', errorMessage);
// })