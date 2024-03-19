function scuberGreetingForFeet(number){
  if (number <= 400 ) {
    return 'This one is on me!';
  }
  else if (number < 2000){
    return 'That will be twenty bucks.';
  }
  else if(number < 2500 ) {
    return 'I will gladly take your thirty bucks.';
  }
  else (number > 2501) 
    return 'No can do.';
  }
      


function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  }
  else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  if (tip === 'generous') {
    return 'Thank you so much.';    
  }else if (tip === 'not as generous'){
    return 'Thank you.';
  }else {
    return 'Bye.';
  }
}  



console.log (scuberGreetingForFeet(2100));
console.log (ternaryCheckCity(NYC));