import { Game } from './../src/game';
import { Player } from './../src/player';

class City {
  constructor(name) {
    this.name = name;
    this.population = parseInt(Math.random() * 100);
    this.infectedPopulation = parseInt(Math.random() * 100);
    this.healthyPopulation = 100 - this.infectedPopulation;
    this.connectionsToOtherCities = [];
    this.hasResearchStation = false;
  }



  infectCity() {
    
  }

  killPeople() {

  }

  cureDisease() {

  }

  buildResearchStation() {

  }

}

export { City };
