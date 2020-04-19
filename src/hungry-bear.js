
export class Bear{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
  }

  setHungry(){
    setInterval(() => {
    $(".intro").text("Bear name is  " + this.name + "  Food level is " + this.foodLevel);
      return  this.foodLevel--;
    },1000)
  }

 didYouGetEaten(){
    setInterval(() => {
      if(this.foodLevel > 0){
       $("#entryView").text("You should feed bear before 10 seconds OR");
      }else{
        $("#entryView").text("You have been eaten");


      }
      },1001)
   
}

  resetGame(){
    if(this.didYouGetEaten() === true){
       return this.feed();
    }
    
  }

  feed(){
    setInterval(() => {
      let arrLevel = [0,10]; 
       let randomNum = Math.floor(Math.random()*arrLevel.length);
       this.foodLevel =arrLevel[randomNum];
     // $(".intro").text("Bear name is  " + this.name + "  Food level is " + this.foodLevel);
      
},10001)
    
  }
}