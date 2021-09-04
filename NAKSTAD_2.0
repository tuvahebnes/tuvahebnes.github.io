#include <LiquidCrystal_I2C.h> // SKJERM
#include <Wire.h> // SKJERM
#include <SevSeg.h> // TIMER

//Tellekonstanter
float timer; // Tilgir variabelen "timer" float-verdi.
float starttime; // Tilgir variabelen "starttime" float-verdi.
int deciseconds = 0; // Tilgir variabelen "deciseconds" int-verdi.

int knapp; // Tilgir variabelen "knapp" int-verdi.
int sjekk; // Tilgir variabelen "sjekk" int-verdi.
LiquidCrystal_I2C skjerm(0x27, 16, 2); // Kaller lcd-skjermen for "skjerm"

// LYS:
int red = A1; // Tilgir variabelen "red" int-verdi. Dette er input-pin til rødt lys på LED-pære.
int green = A2; // Tilgir variabelen "green" int-verdi. Dette er input-pin til grønt lys på LED-pære.
int blue = A3; // Tilgir variabelen "blue" int-verdi. Dette er input-pin til blått lys på LED-pære.

// KLOKKE:
SevSeg klokke; // Kaller displayet for "klokke"
float sekund = 1; // Ett sekund = 1
float tid = (sekund * 5000); 
long start; // Nedtelling starter her
long slutt = 0; // og slutter her.

// SETUP, kjøres én gang:
void setup(){
  knapp = A0; // Inngangen til knappen.
  pinMode(knapp, INPUT_PULLUP); // Bestemmer at moduset til input-pin for knappen er av form "INPUT_PULLUP".

  sjekk = 0; // Skal seinere sjekke om knappen er trykket på eller ikke.
  
  Serial.begin(115200); // Starter seriell, kan muligens fjerne denne.

  // SKJERM:
  skjerm.init(); // Initialiserer skjermen.

  // LYS:
  pinMode(red, OUTPUT); // Bestemmer at moduset til input-pin for rødt lys er av form "INPUT".
  pinMode(green, OUTPUT); // Bestemmer at moduset til input-pin for grønt lys er av form "INPUT".
  pinMode(blue, OUTPUT); // Bestemmer at moduset til input-pin for blått lys er av form "INPUT".

}


// LOOP, kjøres konstant:
void loop(){
  if(digitalRead(knapp) == HIGH){ // Kjører dersom knappen trykkes.
    if(sjekk == 0){
      sjekk = 1;
    }
    else{
      sjekk = 0; // Må treffe HELT nøyaktig mtp. delays for å få den til å avslutte... Er nok unødvendig.
    }
  }
  if(sjekk == 1){ // Dersom knappen er trykket på kjører den koden for skjermen.
    rutine(); // Kaller på funksjonen
    sjekk = 0; // Etter funksjonen er kjørt blir verdien på om knappen er trykket eller ikke satt lik null, slik at den kan trykkes på på nytt.
  }
}


// LYS:
void farge(int redValue, int greenValue, int blueValue){ // Input-verdier for funksjonen.
  analogWrite(red, redValue); // Gir output på red pin lik redValue (bestemt i input til funksjonen).
  analogWrite(green, greenValue); // Gir output på green pin lik greenValue (bestemt i input til funksjonen).
  analogWrite(blue, blueValue); // Gir output på blue pin lik blueValue (bestemt i input til funksjonen).
}


// Hvis knappen blir trykket ned, er dette rutinen som kjøres:
void rutine(){

  // KLOKKE: (Hentet inspirasjon fra https://www.youtube.com/watch?v=b7yCvvrDPSw)
  byte numDigits = 4; // Antall plasser man kan skrive ut verdier på på skjermen.
  byte digitPins[] = {10, 11, 12, 13}; // Tilsier hvilke pins som er brukt som digit-pins.
  byte segmentPins[] = {9, 2, 3, 5, 6, 8, 7, 4}; // Tilsier hvilke pins som er brukt som segment-pins.
  bool resistorsOnSegments = false; // Sier at det ikke er resistor på segment-pins
  byte hardwareConfig = COMMON_ANODE;
  bool updateWithDelays = false; // Sier at det ikke skal oppdateres med delay.
  bool leadingZeros = true;
  bool disableDecPoint = true; // Desimaltall slått av.
  klokke.begin(hardwareConfig, numDigits, digitPins, segmentPins, resistorsOnSegments,
  updateWithDelays, leadingZeros, disableDecPoint); // Starter klokken
  klokke.setBrightness(90); // Setter lysstyrken på klokken lik 90
  delay(100);
  
  skjerm.backlight(); // Skur på backlight på skjermen.
  bool Cleared = true;

  farge(255, 0, 0);  // Lyspæren lyser rødt

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("WET YOUR HANDS"); // Skriver ut på skjermen.
  start = 7; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("PUT ON SOAP"); // Skriver ut på skjermen.
  start = 5; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("RUB BETWEEN"); // Skriver ut på skjermen.
  skjerm.setCursor(0, 1); // Setter pekeren på rad 1 og kolonne 0.
  skjerm.print("FINGERS"); // Skriver ut på skjermen.
  start = 6; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("RUB THE BACK OF"); // Skriver ut på skjermen.
  skjerm.setCursor(0, 1); // Setter pekeren på rad 1 og kolonne 0.
  skjerm.print("THE FINGERS"); // Skriver ut på skjermen.
  start = 6; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("RUB THUMBS"); // Skriver ut på skjermen.
  start = 6; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("RUB FINGERTIPS"); // Skriver ut på skjermen.
  start = 6; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("RINSE HANDS"); // Skriver ut på skjermen.
  skjerm.setCursor(0, 1); // Setter pekeren på rad 1 og kolonne 0.
  skjerm.print("WITH WATER"); // Skriver ut på skjermen.
  start = 15; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("DRY HANDS"); // Skriver ut på skjermen.
  skjerm.setCursor(0, 1); // Setter pekeren på rad 1 og kolonne 0.
  skjerm.print("WITH PAPER"); // Skriver ut på skjermen.
  start = 6; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0, 0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("TURN OFF TAP"); // Skriver ut på skjermen.
  skjerm.setCursor(0, 1); // Setter pekeren på rad 1 og kolonne 0.
  skjerm.print("WITH THE PAPER"); // Skriver ut på skjermen.
  start = 3; // Setter timeren til så mange sekunder.
  countdown(start); // Starter timeren.

  farge(255, 0, 0); // Lyspæren lyser grønt
  skjerm.clear(); // Sletter alt som står på skjermen.
  skjerm.setCursor(0,0); // Setter pekeren på rad 0 og kolonne 0.
  skjerm.print("YOU ARE CLEAN :D"); // Skriver ut på skjermen.
  farge(0, 255, 0);  // Lyspæren skifter til grønn
  delay(15000); // 15 sekunders pause.
  skjerm.clear(); // Sletter alt som står på skjermen.
}

void countdown(unsigned int seconds){ // Starter nedtelling med angitte sekunder.
  timer = seconds;
  starttime = millis(); // Kaller på funksjonen millis.
  deciseconds = 0;
  while (timer > 0){ // Så lenge sekundene større enn null kjøres løkka.
    if (millis() - starttime >= 100) { // Sjekker millisekundene.
      starttime += 100;
      deciseconds++; // 100 millisekund = 1 decisekund
      klokke.setNumber(int(seconds*10 - deciseconds), 1); // Skriver ut på klokken.
      timer -= 0.1; // Trekker fra 0.1 fra nedtellingen.
      }
      
      klokke.refreshDisplay(); // Oppdaterer displayet på klokken.
    }
  }
