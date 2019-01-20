//after every finished should ask do you want to try again ?


const raceWay = new RaceWay(new Location(10, 10), new Location(500, 10));


// Create Cars
const driverAhmet = new Racer("Ahmet");
const carBmv = new Car(driverAhmet);
raceWay.addToRace(carBmv);

const driverHamide = new Racer("Hamide");
const carVolvo = new Car(driverHamide);
raceWay.addToRace(carVolvo);

const driverKazim = new Racer("Kazim");
const carTesla = new Car(driverKazim);
raceWay.addToRace(carTesla);

const driverHakan = new Racer("Hakan");
const carSubaru = new Car(driverHakan);
raceWay.addToRace(carSubaru);

const driverMehmet = new Racer("Mehmet");
const carMercedes = new Car(driverMehmet);
raceWay.addToRace(carMercedes);

const driverRabia = new Racer("Rabia");
const carVw = new Car(driverRabia);
raceWay.addToRace(carVw);




const raceManager = new RaceManager($('#raceArea'), raceWay);

raceManager.createRaceWay();
raceManager.start();

