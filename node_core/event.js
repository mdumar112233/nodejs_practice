import EventEmitter from 'events';

// Creating class
class MyEmitter extends EventEmitter{}


// Creating Object
const myEmitter = new MyEmitter();


// // example 1
// // Register Event Listener
// myEmitter.on('event', () => {
//     console.log('an event occur')
// })

// // Trigger Event
// myEmitter.emit('event')



// // example 2
// // Register Event Listener
// let m = 0;
// myEmitter.on('event', () => {
//     console.log(++m)
// })

// // Trigger Event
// myEmitter.emit('event');
// myEmitter.emit('event');



// example 3
// Register Event Listener
let m = 0;
myEmitter.once('event', () => {
    console.log(++m)
})

// Trigger Event
myEmitter.emit('event');
myEmitter.emit('event');










