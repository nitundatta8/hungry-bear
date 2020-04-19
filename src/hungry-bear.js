import {Planet,Earth,Mercury,Venus,Mars,Jupiter,Person} from "./../src/age-calculator";


//service class
export class GalacticAgeCalculator  {
  constructor(){}

  calculateAge(personAge,planetAgeFactor){
    let age = Math.round(personAge * planetAgeFactor);
    return age;
  }

  calculateAveLifeExp(person){
    const aveAge = 80;
    if(person.lifestyle === 'healthy lifestyle' && person.diet === 'healthy diet'  && person.activityLevel==='moderate'){
      return  aveAge; 
    }else{
      return aveAge - 5;
    }
  }

  calcuExceedAveAge(personAgeInPlanet,aveAge){
    
     let exceedAveAge = Math.round(personAgeInPlanet - aveAge);
     return exceedAveAge;
  }

}