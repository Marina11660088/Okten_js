let cardSuit= ['spade', 'diamond','heart', 'clubs'];
let value= [6, 7, 8, 9, 10, 'ace','jack','queen','king'];
let color= {
    spade: 'black',
    diamond: 'red',
    heart: 'red',
    clubs: 'black'
};

function cardDeck(){
    let cards = []
for (const nameCard of cardSuit) {
    for (const valueElement of value) {
        cards.push({
            cardSuit: nameCard,
            value: valueElement,
            color: color[nameCard]
        })
    }
}
    return cards
}
let cards = cardDeck()
console.log(cards)


let filterSpadeAce=cards.filter((card) => {
    return card.cardSuit==='spade' & card.value==='ace';
});
console.log(filterSpadeAce)

let filterSixes=cards.filter((card) => {
    return  card.value===6;
});
console.log(filterSixes)

let filterReds=cards.filter((card) => {
    return  card.color==='red';
});
console.log(filterReds)

let filterDiamond=cards.filter((card) => {
    return  card.cardSuit==='diamond';
});
console.log(filterDiamond)

let filterClubs1=cards.filter((card) => {
    return  card.cardSuit==='clubs' & card.value>8;
});
console.log(filterClubs1)
let filterClubs2 = cards.filter((card)=> card.cardSuit==='clubs' && typeof card.value ==="string");
 console.log (filterClubs2)
let filterClubs= filterClubs1.concat(filterClubs2);
 console.log (filterClubs)


let reduceCards = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduceCards)

