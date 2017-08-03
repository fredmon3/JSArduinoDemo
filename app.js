var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});

// OUTPUT

board.on("ready", function() {
  led = new five.Led(13);
  led.blink(500);
});


// INPUT

// board.on("ready", function() {
//   led = new five.Led(13);
//   button = new five.Button({ pin: 12, isPullup: true });
  
//   button.on("press", () => { 
//     console.log("Button Pressed!!!");
//   });

//   button.on("release", () =>  { 
//     console.log("Button Released!!!");
//   });
// });

// board.on("ready", function() {
//   led = new five.Led(13);
//   button = new five.Button({ pin: 12, isPullup: true });
  
//   button.on("press", () => { 
//     led.on();
//   });

//   button.on("release", () =>  { 
//     led.off();
//   });
// });


//audio
// board.on("ready", function() {
//   led = new five.Led(13);
//   button = new five.Button({ pin: 12, isPullup: true });
//   
//   button.on("press", () => { 
//     play.play("td4w.mp3");
//   });
// });
