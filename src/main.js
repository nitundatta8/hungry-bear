import {Bear} from './../src/hungry-bear.js';

$(document).ready(function(){
  $("#newEntry").submit(function(event){
    event.preventDefault();
     let bear = new Bear("Fuzzy");
     console.log(bear.name);
     bear.setHungry();
     bear.didYouGetEaten();
     bear.feed();
     
  });
  
});


