console.log('starting app');

setTimeout(() => {
    console.log('callback');
},2000);
setTimeout(() => {
    console.log('callback0');
},0);

console.log('finishing app');
