

class RaceManager{

    constructor(pContainer, pRaceWay){
        this.container = pContainer;
        this.raceWay = pRaceWay;
    }

    init(){
        // model initileme
        // ui initleme
    }

    addEventHandlers(){

    }


    start(){
        const stopHandler =
            setInterval(() => {
                this.raceWay.refresh();

                this.raceWay.getCars()
                            .forEach((pCar) => {
                                $(`#${pCar.getRacer().getName()}`).css("left", pCar.getLocation().left + "px");
                            });

                let winners =
                    this.raceWay.getCars().filter( (pCar) => (pCar.getLocation().left - 30) >= this.raceWay.getFinishLocation().left)

                if(winners.length>0){
                    clearInterval(stopHandler);
                    alert("The winner is " + winners[0].getRacer().getName());
                }

            }, 1*100);
    }


    createRaceWay(){
        let html = this.raceWay
                        .getLanes()
                        .map( (lane) =>
                            `<section style="height: ${lane.getSize()}px">
                                <span id="${lane.getCar().getRacer().getName()}"
                                    style="height: ${lane.getCar().getSize()}px; 
                                             width: ${lane.getCar().getSize()}px; 
                                             background-color: ${lane.getCar().getColor()}">
                                    ${lane.getCar().getRacer().getName()}
                                </span>
                            </section>`
                        )
                        .join("");

        this.container.html(html);
    }
}