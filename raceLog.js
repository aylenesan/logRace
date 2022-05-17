let raceNumber = Math.floor(Math.random() * 1000);
let prompt = require('prompt-sync')();


let registeredE = prompt('Hello runner, did you register early today? yes/no --- ');

if(`${registeredE}` === 'yes'){
    registeredE = true;
}
else if(`${registeredE}` === 'no'){
    registeredE = false;
}

let age = prompt('Please enter your age --- '); // var for runners age 

if(age > 18 && registeredE){
  raceNumber += 1000;
}

if(age > 18 && registeredE){
  console.log(`Race will begin at 9:30 am, for runner number  ${raceNumber}`);
}
else if(age > 18 && !registeredE){
  console.log(`Race will begin at 11:00 am, for runner number  ${raceNumber}`);
}
else if(age < 18 && registeredE){
  console.log(`Race will begin at 12:30 pm for runner number ${raceNumber}`);
}
else if(age < 18 && !registeredE){
  console.log(`Race will begin at 12:30 pm for runner number ${raceNumber}`);
}
else if(age = 18 && registeredE){
  console.log('See the registration desk for further assistance!');
}
else if(age = 18 && !registeredE){
    console.log('See the registration desk for further assistance!');
}
