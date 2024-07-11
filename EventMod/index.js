const EventEmitter = require('events');

const emitter = new EventEmitter();

// event callbacks 
emitter.on('order-pizza' , (size,toppings) => {
  console.log(`Pizza ordered with  :${size} and ${toppings}`);
})

// event emiting or firing .
emitter.emit('order-pizza', 'large' , 'mushroom');