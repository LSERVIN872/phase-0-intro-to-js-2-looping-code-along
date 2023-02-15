// Code your solutions in this file

function writeCards(names, event) {
    let strings = []
    for (let i = 0; i < names.length; i++) {
    strings.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return strings
}
function countDown(){
    let countdown = 10;

    while (countdown >= 0) {
      console.log(--countdown)
    }}

