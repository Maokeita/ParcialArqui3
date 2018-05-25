int Sensor1 = A2;
int Sensor2 = A0;
int Sensor3 = A3;
int Sensor4 = A4;
int salida = 2;
char recibir;
void setup() {
  pinMode(salida, OUTPUT);
  pinMode(Sensor1, INPUT);
  pinMode(Sensor2, INPUT);
  pinMode(Sensor3, INPUT);
  pinMode(Sensor4, INPUT);
  Serial.begin(9600);
}
int Residuo[4] = {0, 0, 0, 0};

void loop() {
  int Valor1 = analogRead(Sensor1);
  int Valor2 = analogRead(Sensor2);
  int Valor3 = analogRead(Sensor3);
  int Valor4 = analogRead(Sensor4);
  //Sensor 1 1234 4 3 2 1 
  for (int i = 0; i <= 3; i++) {
    Residuo[i] = Valor1 % 10;
    Valor1 = Valor1 / 10;
  }

  Serial.write('a');
  for (int i = 3; i >= 0; i--) {
    Serial.write(Residuo[i]);
  }
  Serial.write('c');


  //Sensor 2
  for (int i = 0; i <= 3; i++) {
    Residuo[i] = Valor2% 10;
    Valor2 = Valor2 / 10;
  }
  Serial.write('d');
  for (int i = 3; i >= 0; i--) {
    Serial.write(Residuo[i]);
  }
