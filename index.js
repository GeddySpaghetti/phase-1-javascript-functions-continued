function saturdayFun(activity = "roller-skate", optional = "bathe my dog"){


//let goodWeather = 85;
//let badWeather =  69;
//if (goodWeather > badWeather){
    return (`This Saturday, I want to ${activity}!`);
}
//else console.log(`This Saturday, I want to ${optional}!`) 
//}

function mondayWork(activityB = "go to the office"){
return (`This Monday, I will ${activityB}.`);
}

/*function wrapAdjective(special = "a dedicated programmer"){ 7 OUT OF 2 PASSING
function result  wrapAdjective('*')
 const originalFunction = wrapAdjective;
    window.myFunction = function() {
      console.log(`You are ${special}`);
      originalFunction();
    }
}
function wrapAdjective(string) {
    return {function {string = `You are ${special}!`}     7 OUT OF 2 PASSING
   }
   function *name*(parameter*=default*){
    block of code
 }

 function wrapAdjective(special="*"){     7 OUT OF 2 PASSING
    const part1 = "You are"
    return function(){
     const part2 = "special"
     return function(){
         console.log(`${part1}, ${part2}, ${special}`);
     
 }}}*/

 function wrapAdjective(str='*'){
     return function(name='special'){
         return `You are ${str}${name}${str}!`
     }
 }

 wrapAdjective('%')('a dedicated programmer')