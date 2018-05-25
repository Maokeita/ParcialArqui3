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
