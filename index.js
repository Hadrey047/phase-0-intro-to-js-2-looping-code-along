// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const writeCards = (["Ada", "Brendan", "Ali"], "birthday");
function newWriteCards(writeCards){
    for (let i = 0; i < writeCards.length; i++);

    return (`Thank you, ${writeCards}, for the wonderful birthday gift!`)
}


let countDown = 0;
while (countDown < 10) {
  console.log(countDown++);
}

for (let countDown = 0; countDown < 10; countDown++) {
    console.log(countDown);
  }