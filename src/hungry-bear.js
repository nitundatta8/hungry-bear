
export class Bear{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
  }

  setHungry(){
    setInterval(() => {
     return  this.foodLevel--;
    },1000)
  }

  didYouGetEaten(){
    if(this.foodLevel > 0){
      return false;
    }else{
      return true;
    }
}

  resetGame(){
    if(this.didYouGetEaten() === true){
       return this.feed();
    }
    
  }

  feed(){
    return this.foodLevel = 10;
  }
}