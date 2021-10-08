let userRoll = prompt('Enter a Number between 1 and 6: ')

function russianRullete (userRoll){
    let theRoll = Math.ceil((Math.random() * 6))
    console.log(theRoll)
    if(theRoll >= userRoll){
        return `The roll was....${theRoll}!! BAM! You Lose...`
    }else if(theRoll == userRoll){
        return "Dealer takes the shot! You Win!"
    } else {
        return "You live... try again!"
    }
}

russianRullete(userRoll)

// counting cards logic -- essentially BLACKJACK
var count = 0;
function cc(card) {
  // Only change code below this line

switch(card){
case 2:
case 3:
case 4:
case 5:
case 6:
  count++
  break;
case 10:
case 'J':
case 'Q':
case 'K':
case 'A':
  count--
  break;
}

let holdbet = 'Hold'
if(count > 0){
 holdbet = 'Bet'
}
return count + " " + holdbet
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');