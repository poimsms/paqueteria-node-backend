const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter;

let producer = (channel, queue) => {
    event.on('nuevo_pedido', msg =>
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)))
    );
}

module.exports = { producer }