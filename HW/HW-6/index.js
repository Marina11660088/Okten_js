let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
let color = {
    spade: 'black',
    diamond: 'red',
    heart: 'red',
    clubs: 'black'
};

function cardDeck() {
    let cards = []
    for (const nameCard of suits) {
        for (const valueElement of values) {
            cards.push({
                suits: nameCard,
                values: valueElement,
                color: color[nameCard]
            })
        }
    }
    return cards
}

let cards = cardDeck()
console.log(cards)


let findSpadeAce = cards.find((card) => {
    return card.suits === 'spade' & card.values === 'ace';
});
console.log(findSpadeAce)

let filterSixes = cards.filter((card) => {
    return card.values === 6;
});
console.log(filterSixes)

let filterReds = cards.filter((card) => {
    return card.color === 'red';
});
console.log(filterReds)

let filterDiamond = cards.filter((card) => {
    return card.suits === 'diamond';
});
console.log(filterDiamond)

let filterClubs1 = cards.filter((card) => {
    return card.suits === 'clubs' & card.values > 8;
});
console.log(filterClubs1)
let filterClubs2 = cards.filter((card) => card.suits === 'clubs' && typeof card.value === "string");
console.log(filterClubs2)
let filterClubs = filterClubs1.concat(filterClubs2);
console.log(filterClubs)


let reduceCards = cards.reduce((accumulator, card) => {
    if (card.suits === 'spade') {
        accumulator.spades.push(card);
    } else if (card.suits === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.suits === 'heart') {
        accumulator.hearts.push(card);
    } else {
        accumulator.clubs.push(card);
    }
    return accumulator;
},{spades:[],diamonds:[],hearts:[],clubs:[]});
console.log(reduceCards)

