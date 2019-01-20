class Car {

    constructor(pRacer) {
        this.color = "#" + Math.round(Math.random() * 0XFFFFFF).toString(16);
        this.location = null;
        this.racer = pRacer;
        this.size = 80;
        this.acceleration = Math.random() * 1;
        this.velocity = Math.random() * 20;

    }

    setLocation(pLocation){
        this.location = pLocation;
    }

    getLocation(){
        return this.location;
    }

    move(){
        this.location.left += this.velocity + this.velocity * this.acceleration;
    }

    getColor(){
        return this.color;
    }

    getSize(){
        return this.size;
    }

    getRacer(){
        return this.racer;
    }

}