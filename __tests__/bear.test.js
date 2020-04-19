import {Bear} from './../src/hungry-bear.js';

describe("Bear",function(){
  let bear;
  jest.useFakeTimers();
  beforeEach(function(){
    bear = new Bear("Fuzzy");
    bear.setHungry();
    
  });

  afterEach(function(){
    jest.clearAllTimers();
  })
  

  test("should have a name and food lavel 10 when it is craeted",function(){
    expect(bear.name).toEqual("Fuzzy");
    expect(bear.foodLevel).toEqual(10);
  });

  test("should food level 7 after 3001 milliseconds", function(){
    
    jest.advanceTimersByTime(3001)
    expect(bear.foodLevel).toEqual(7);
  });

  test("should get very hungry if food level drops below zero",() =>{
     bear.foodLevel=0;
     expect(bear.didYouGetEaten()).toEqual(true);
  });
  test("should get very hungry if 10 seconds pass without feeding",() =>{
    jest.advanceTimersByTime(10001);
    
    expect(bear.didYouGetEaten()).toEqual(true);
  })

  test("should have food level of 10 if it is fed", () =>{
     jest.advanceTimersByTime(9001);
     expect(bear.feed()).toEqual(10);

  });

  test("should a player still feed the bear after getting 'eaten' and keep playing",() =>{
      jest.advanceTimersByTime(10001);
      bear.didYouGetEaten();
      expect(bear.resetGame()).toEqual(10);
  });
   
});