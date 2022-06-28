// // Code your solutions in this file
function writeCards(namesArray, eventName){
    let resultingCards = []
    for(let i=0; i < namesArray.length; i++){
        resultingCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return resultingCards
}

function countDown(initialInteger){
    let counter = initialInteger
    while (counter > 0) {

        console.log(counter)
        counter -= 1
    }
    console.log(counter)
}

countDown(10)