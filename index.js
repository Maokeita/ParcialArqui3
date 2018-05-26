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
      s1: 0.80,
      s2: 0.80,
      s3: 0.80,
      s4: 0.80
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
      s1: 0.70,
      s2: 0.70,
      s3: 0.70,
      s4: 0.80
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
      s2: 0.74,
      s3: 0.80,
      s4: 0.72
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
      s3: 0.83,
      s4: 0.90
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
      s2: 0.81,
      s3: 0.79,
      s4: 0.146
    },
    output: {
      sf0: 0,
      sf1: 1,
      sf2: 0,
      sf3: 0
    }
  },
  {
    input: {
      s1: 0.733,
      s2: 0.81,
      s3: 0.79,
      s4: 0.86
    },
    output: {
      sf0: 0,
      sf1: 1,
      sf2: 0,
      sf3: 1
    }
  },
  {
    input: {
      s1: 0.733,
      s2: 0.81,
      s3: 0.98,
      s4: 0.146
    },
    output: {
      sf0: 0,
      sf1: 1,
      sf2: 1,
      sf3: 0
    }
  },
  {
    input: {
      s1: 0.43,
      s2: 0.81,
      s3: 0.86,
      s4: 0.99
    },
    output: {
      sf0: 0,
      sf1: 1,
      sf2: 1,
      sf3: 1
    }
  },
  {
    input: {
      s1: 0.833,
      s2: 0.25,
      s3: 0.49,
      s4: 0.65
    },
    output: {
      sf0: 1,
      sf1: 0,
      sf2: 0,
      sf3: 0
    }
  },
  {
    input: {
      s1: 0.833,
      s2: 0.31,
      s3: 0.79,
      s4: 0.86
    },
    output: {
      sf0: 1,
      sf1: 0,
      sf2: 0,
      sf3: 1
    }
  },
  {
    input: {
      s1: 0.933,
      s2: 0.71,
      s3: 0.99,
      s4: 0.146
    },
    output: {
      sf0: 1,
      sf1: 0,
      sf2: 1,
      sf3: 0
    }
  },
  {
    input: {
      s1: 0.833,
      s2: 0.61,
      s3: 0.84,
      s4: 0.83
    },
    output: {
      sf0: 1,
      sf1: 0,
      sf2: 1,
      sf3: 1
    }
  },
  {
    input: {
      s1: 0.86,
      s2: 0.81,
      s3: 0.77,
      s4: 0.646
    },
    output: {
      sf0: 1,
      sf1: 1,
      sf2: 0,
      sf3: 0
    }
  },
  {
    input: {
      s1: 0.86,
      s2: 0.81,
      s3: 0.67,
      s4: 0.846
    },
    output: {
      sf0: 1,
      sf1: 1,
      sf2: 0,
      sf3: 1
    }
  },
  {
    input: {
      s1: 0.81,
      s2: 0.88,
      s3: 0.97,
      s4: 0.546
    },
    output: {
      sf0: 1,
      sf1: 1,
      sf2: 1,
      sf3: 0
    }
  },
  {
    input: {
      s1: 0.733,
      s2: 0.55,
      s3: 0.79,
      s4: 0.146
    },
    output: {
      sf0: 0,
      sf1: 0,
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
          console.log("la respuesta1 es " + respuesta.sf0);
          console.log("la respuesta2 es " + respuesta.sf1);
          console.log("la respuesta3 es " + respuesta.sf2);
          console.log("la respuesta4 es " + respuesta.sf3);
          //1111
          if (respuesta.sf0 > 0.75 && respuesta.sf1 > 0.75 && respuesta.sf2 > 0.75 && respuesta.sf3 > 0.75) {
            port.write("A");
            console.log("la letra es a");
          }
          //1110
          else if (respuesta.sf0 > 0.75 && respuesta.sf1 > 0.75 && respuesta.sf2 > 0.75 && respuesta.sf3 < 0.75) {
            port.write("B");
            console.log("la letra es b");
          }
          //1101
          else if (respuesta.sf0 > 0.75 && respuesta.sf1 > 0.75 && respuesta.sf2 < 0.75 && respuesta.sf3 > 0.75) {
            port.write("C");
            console.log("la letra es c");
          }
          //1100
          else if (respuesta.sf0 > 0.75 && respuesta.sf1 > 0.75 && respuesta.sf2 < 0.75 && respuesta.sf3 < 0.75) {
            port.write("D");
            console.log("la letra es d");
          }
          //1011
          else if (respuesta.sf0 > 0.75 && respuesta.sf1 < 0.75 && respuesta.sf2 > 0.75 && respuesta.sf3 > 0.75) {
            port.write("E");
            console.log("la letra es e");
          }
          //1010
          else if (respuesta.sf0 > 0.75 && respuesta.sf1 < 0.75 && respuesta.sf2 > 0.75 && respuesta.sf3 < 0.75) {
            port.write("F");
            console.log("la letra es f");
          }
          //1001
          else if (respuesta.sf0 > 0.75 && respuesta.sf1 < 0.75 && respuesta.sf2 < 0.75 && respuesta.sf3 > 0.75) {
            port.write("G");
            console.log("la letra es g");
          }
          //1000
          else if (respuesta.sf0 > 0.75 && respuesta.sf1 < 0.75 && respuesta.sf2 < 0.75 && respuesta.sf3 < 0.75) {
            port.write("H");
            console.log("la letra es h");
          }
          //0111
          else if (respuesta.sf0 < 0.75 && respuesta.sf1 > 0.75 && respuesta.sf2 > 0.75 && respuesta.sf3 > 0.75) {
            port.write("I");
            console.log("la letra es i");
          }
          //0110
          else if (respuesta.sf0 < 0.75 && respuesta.sf1 > 0.75 && respuesta.sf2 > 0.75 && respuesta.sf3 < 0.75) {
            port.write("J");
            console.log("la letra es j");
          }
          //0101
          else if (respuesta.sf0 < 0.75 && respuesta.sf1 > 0.75 && respuesta.sf2 < 0.75 && respuesta.sf3 > 0.75) {
            port.write("K");
            console.log("la letra es k");
          }
          //0100
          else if (respuesta.sf0 < 0.75 && respuesta.sf1 > 0.75 && respuesta.sf2 < 0.75 && respuesta.sf3 < 0.75) {
            port.write("L");
            console.log("la letra es l");
          }
          //0011
          else if (respuesta.sf0 < 0.75 && respuesta.sf1 < 0.75 && respuesta.sf2 > 0.75 && respuesta.sf3 > 0.75) {
            port.write("M");
            console.log("la letra es m");
          }
          //0010
          else if (respuesta.sf0 < 0.75 && respuesta.sf1 < 0.75 && respuesta.sf2 > 0.75 && respuesta.sf3 < 0.75) {
            port.write("N");
            console.log("la letra es n");
          }
          //0001
          else if (respuesta.sf0 < 0.75 && respuesta.sf1 < 0.75 && respuesta.sf2 < 0.75 && respuesta.sf3 > 0.75) {
            port.write("O");
            console.log("la letra es o");
          }
          //0000
          else if (respuesta.sf0 < 0.75 && respuesta.sf1 < 0.75 && respuesta.sf2 < 0.75 && respuesta.sf3 < 0.75) {
            port.write("P");
            console.log("la letra es p");
          }
          //console.log("El Valor es:" + Sensor1);
        } else {
          Sensor4Tmp = Sensor4Tmp * 10 + data[i];
        }
        break;
    }
  }
});
