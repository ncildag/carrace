class RaceWay {

    constructor(pStartPoint, pFinishPoint) {
        this.startLocation = pStartPoint;
        this.finishLocation = pFinishPoint;
        this.cars = [];
        this.lanes = [];
    }


    addToRace(pCar){

        const lane = new Lane(pCar);
        this.lanes.push(lane);

        let x = this.startLocation.left;
        let y = this.startLocation.top + this.cars.length * lane.getSize();
        pCar.setLocation(new Location(x, y));

        this.cars.push(pCar);
    }

    refresh(){
        this.cars.forEach((pVehicle) => {
            pVehicle.move();
            console.log(pVehicle.getRacer().getName(), pVehicle.getLocation().left);
        });
    }

    init(){
        // yarisi yeniden baslat
        // House keeping / Clean up operations
        this.cars = [];
        this.lanes = [];
    }


    getLanes(){
        return this.lanes;
    }

    getCars(){
        return this.cars;
    }

    getFinishLocation(){
        return this.finishLocation;
    }
}
