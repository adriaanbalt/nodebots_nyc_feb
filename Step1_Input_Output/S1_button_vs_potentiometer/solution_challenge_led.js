var five = require("johnny-five");
var myBoard = new five.Board();


myBoard.on("ready", function() {

    var rgb = new five.Led.RGB({
        pins: {
            red: 6,
            green: 5,
            blue: 3
        }
    });

    var pmeter = new five.Sensor("A0");
    pmeter.on("change", function() {
      if (this.value<200 ){
              rgb.color("#ff00ff");
          }else if(this.value>200 && this.value<600 ){
              rgb.color("#a020f0");
          }else if(this.value>600){
              rgb.color("#ffff00");
          }else{
              rgb.color("#0000ff");
          }
    });

    var button = new five.Button(2);
    button.on("down", function() {
      console.log("down");
      rgb.color("#ff00ff");
    });

    button.on("up", function() {
      console.log("down");
      rgb.color("#0000ff");
    });
    
});
