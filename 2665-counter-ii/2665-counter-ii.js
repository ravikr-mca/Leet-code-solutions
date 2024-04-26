/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let originalNum=init;
    return {
        increment: ()=>{
         return  init=init+1;
        },
        decrement: ()=>{
          return  init=init-1;
        },
        reset: ()=>{
          return init = originalNum;
        }    
        
    }
};


 const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
