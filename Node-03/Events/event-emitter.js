const events = require('events');/*Managements events in NodeJS */

/*Event magament tool */
const eventEmitter=new events.EventEmitter();

/*Define a event with ".on" keyword */
eventEmitter.on('viewMessage',(text)=>{
    // console.log("Hello world!!! ",text);
    console.log(`Hello world!!! ${text.name} ${text.surname}`);
});

eventEmitter.once('sayOnceHi',()=>{
    console.log("Say hi...");
})

/*Trigger a event with "emit" keyword. */
const dataObj={name:"Tommy",surname:"Nick"};
 eventEmitter.emit('viewMessage',dataObj);
/* setInterval(() => {
     eventEmitter.emit('viewMessage');
 }, 2000);*/

 eventEmitter.emit('sayOnceHi');
 eventEmitter.emit('sayOnceHi');

