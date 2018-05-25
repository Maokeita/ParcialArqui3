var SerialPort = require('serialport');
var brain = require('brainjs');
var port = new SerialPort('COM3', {
  baudRate: 9600
});


var Sensor1 = 0;
var Sensor1Tmp = 0;
var Estado = 0;
var Sensor2 = 0;
var Sensor2Tmp = 0;
var Sensor3 = 0;
var Sensor3Tmp = 0;
var Sensor4 = 0;
var Sensor4Tmp = 0;

const Neurona = new brain.NeuralNetwork();

Neurona.train([{
    input: {
      s1: 0,
      s2: 0,
      s3: 0,
      s4: 0
    },
    output: {
      sf0: 1,
      sf1: 1,
      sf2: 1,
      sf3: 1
    }
  },
  {
    input: {
      s1: 0.471,
      s2: 0.125,
      s3: 0.83,
      s4: 0.152
    },
    output: {
      sf0: 0,
      sf1: 0,
      sf2: 0,
      sf3: 1
    }
  },
  {
    input: {
      s1: 0.733,
      s2: 0.121,
      s3: 0.79,
      s4: 0.146
    },
    output: {
      sf0: 0,
      sf1: 0,
      sf2: 1,
      sf3: 0
    }
  },
  {
    input: {
      s1: 0.331,
      s2: 0.230,
      s3: 0.40,
      s4: 0.136
    },
    output: {
      sf0: 0,
      sf1: 0,
      sf2: 1,
      sf3: 1
    }
  },
  {
    input: {
      s1: 0.733,
      s2: 0.121,
      s3: 0.79,
      s4: 0.146
    },
    output: {
      sf0: 0,
      sf1: 1,
      sf2: 0,
      sf3: 0
    }
  }
]);
port.on('data', function(data) {
  //console.log("Valor 1 " + Sensor1 + " Valor 2 " + Sensor2 + " Valor 3 " + Sensor3 + " Valor 4 " + Sensor4);
  for (var i = 0; i < data.length; i++) {
    switch (Estado) {
      case 0:
        if (data[i] == 97) {
          Estado = 1;
          Sensor1Tmp = 0;
        } else if (data[i] == 100) {
          Estado = 2;
          Sensor2Tmp = 0;
        } else if (data[i] == 102) {
          Estado = 3;
          Sensor3Tmp = 0;
        } else if (data[i] == 104) {
          Estado = 4;
          Sensor4Tmp = 0;
        }
        break;
      case 1:
        if (data[i] == 99) {
          Sensor1 = Sensor1Tmp;
          Estado = 0;
          //console.log("El Valor es:" + Sensor1);
        } else {
          Sensor1Tmp = Sensor1Tmp * 10 + data[i];
        }
        break;
      case 2:
        if (data[i] == 101) {
          Sensor2 = Sensor2Tmp;
          Estado = 0;
          //console.log("El Valor es:" + Sensor1);
        } else {
          Sensor2Tmp = Sensor2Tmp * 10 + data[i];
        }
        break;
      case 3:
        if (data[i] == 103) {
          Sensor3 = Sensor3Tmp;
          Estado = 0;
          //console.log("El Valor es:" + Sensor1);
        } else {
          Sensor3Tmp = Sensor3Tmp * 10 + data[i];
        }
        break;
        case 4:
          if (data[i] == 105) {
            Sensor4 = Sensor4Tmp;
            Estado = 0;
            var respuesta = Neurona.run({
              input: {
                s1: Sensor1,
                s2: Sensor2,
                s3: Sensor3,
                s4: Sensor4
              }
            }); // [0.987]
            console.log("la respuesta es " + respuesta.sf0);
            console.log("la respuesta es " + respuesta.sf1);
            console.log("la respuesta es " + respuesta.sf2);
            console.log("la respuesta es " + respuesta.sf3);
            if (respuesta.sf0 > 0.75) {
              port.write("A");
              console.log("la letra es a");
            } else {
              port.write("B");
            }
            if (respuesta.sf1 > 0.75) {
              port.write("C");
            } else {
              port.write("D");
            }
            if (respuesta.sf2 > 0.75) {
              port.write("E");
            } else {
              port.write("F");
            }
            if (respuesta.sf3 > 0.75) {
              port.write("G");
            } else {
              port.write("H");
            }
            //console.log("El Valor es:" + Sensor1);
          } else {
            Sensor4Tmp = Sensor4Tmp * 10 + data[i];
          }
          break;
      }
    }
  });
