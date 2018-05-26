int Sensor1 = A0;
int Sensor2 = A2;
int Sensor3 = A3;
int Sensor4 = A4;
int salida1 = 2;
int salida2 = 3;
int salida3 = 4;
int salida4 = 5;
char recibir;
void setup() {
  pinMode(salida1, OUTPUT);
  pinMode(salida2, OUTPUT);
  pinMode(salida3, OUTPUT);
  pinMode(salida4, OUTPUT);
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
  Serial.write('e');

  //Sensor 3 1234 4 3 2 1
  for (int i = 0; i <= 3; i++) {
    Residuo[i] = Valor3 % 10;
    Valor3 = Valor3 / 10;
  }

  Serial.write('f');
  for (int i = 3; i >= 0; i--) {
    Serial.write(Residuo[i]);
  }
  Serial.write('g');

//Sensor 4 1234 4 3 2 1
  for (int i = 0; i <= 3; i++) {
    Residuo[i] = Valor4 % 10;
    Valor4 = Valor4 / 10;
  }

  Serial.write('h');
  for (int i = 3; i >= 0; i--) {
    Serial.write(Residuo[i]);
  }
  Serial.write('i');

   if (Serial.available() ) {
    char letra = Serial.read();
    if (letra == 'A') {
      digitalWrite(salida1, LOW);
      digitalWrite(salida2, LOW);
      digitalWrite(salida3, LOW);
      digitalWrite(salida4, LOW);
    }
    else if (letra == 'B') {
      digitalWrite(salida1, LOW);
      digitalWrite(salida2, LOW);
      digitalWrite(salida3, LOW);
      digitalWrite(salida4, HIGH);
    }
    else if (letra == 'C') {
      digitalWrite(salida1, LOW);
      digitalWrite(salida2, LOW);
      digitalWrite(salida3, HIGH);
      digitalWrite(salida4, LOW);
    }
    else if (letra == 'D') {
      digitalWrite(salida1, LOW);
      digitalWrite(salida2, LOW);
      digitalWrite(salida3, HIGH);
      digitalWrite(salida4, HIGH);
    }
    else if (letra == 'E') {
      digitalWrite(salida1, LOW);
      digitalWrite(salida2, HIGH);
      digitalWrite(salida3, LOW);
      digitalWrite(salida4, LOW);
    }
    else if (letra == 'F') {
      digitalWrite(salida1, LOW);
      digitalWrite(salida2, HIGH);
      digitalWrite(salida3, LOW);
      digitalWrite(salida4, HIGH);
    }
    else if (letra == 'G') {
      digitalWrite(salida1, LOW);
      digitalWrite(salida2, HIGH);
      digitalWrite(salida3, HIGH);
      digitalWrite(salida4, LOW);
    }
    else if (letra == 'H') {
      digitalWrite(salida1, LOW);
      digitalWrite(salida2, HIGH);
      digitalWrite(salida3, HIGH);
      digitalWrite(salida4, HIGH);
    }
    else if (letra == 'I') {
      digitalWrite(salida1, HIGH);
      digitalWrite(salida2, LOW);
      digitalWrite(salida3, LOW);
      digitalWrite(salida4, LOW);
    }
    else if (letra == 'J') {
      digitalWrite(salida1, HIGH);
      digitalWrite(salida2, LOW);
      digitalWrite(salida3, LOW);
      digitalWrite(salida4, HIGH);
    }
    else if (letra == 'K') {
      digitalWrite(salida1, HIGH);
      digitalWrite(salida2, LOW);
      digitalWrite(salida3, HIGH);
      digitalWrite(salida4, LOW);
    }
    else if (letra == 'L') {
      digitalWrite(salida1, HIGH);
      digitalWrite(salida2, LOW);
      digitalWrite(salida3, HIGH);
      digitalWrite(salida4, HIGH);
    }
    else if (letra == 'M') {
      digitalWrite(salida1, HIGH);
      digitalWrite(salida2, HIGH);
      digitalWrite(salida3, LOW);
      digitalWrite(salida4, LOW);
    }
    else if (letra == 'N') {
      digitalWrite(salida1, HIGH);
      digitalWrite(salida2, HIGH);
      digitalWrite(salida3, LOW);
      digitalWrite(salida4, HIGH);
    }
    else if (letra == 'O') {
      digitalWrite(salida1, HIGH);
      digitalWrite(salida2, HIGH);
      digitalWrite(salida3, HIGH);
      digitalWrite(salida4, LOW);
    }
    else if (letra == 'P') {
      digitalWrite(salida1, HIGH);
      digitalWrite(salida2, HIGH);
      digitalWrite(salida3, HIGH);
      digitalWrite(salida4, HIGH);
    }
}
  //Serial.println();
  delay(1000);
}
