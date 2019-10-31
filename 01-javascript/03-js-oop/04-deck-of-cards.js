class Card {
    constructor(suit, strVal, numVal){
        this.suit = suit
        this.strVal = strVal
        this.numVal = numVal
    }
    show(){
        let show_results = `${this.strVal} of ${this.suit}`
        console.log(show_results)
        return this
    }
}

class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
    }
  
    reset(){
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 'Jack', 'Queen', 'King'];
  
      for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            var card = new Card(suits[i], values[j], j+1)
          this.deck.push(card);
        }
      }
      return this
    }
  
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
    }
  
    deal(player){
        if(player instanceof Player){
            let card = this.deck.pop()
            player.hand.push(card)
            console.log(`This card has been dealt to ${player.name}: ${card.strVal} of ${card.suit}.`)
            return this
        } else {
            console.log("Enter a valid player to deal a card to.")
            return this
        }
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = [];
    }

    takeCard(deck){
        if(deck instanceof Deck){
            deck.deal(this)
            return this
        } else {
            console.log("Enter a valid deck to draw a card from, try again.")
            return this
        }
    }

    discardCard(card_index){
    if(this.hand[card_index]){
        var card_removed = this.hand.splice(card_index, 1)
        console.log(`${this.name} discarded a:`)
        console.log(card_removed)
        return this
    } else {
        console.log("The card you tried to discard doesn't exist, try again.")
        return this
        }
    }

    showHand(){
        console.log(`${this.name}'s Hand:`)
        console.log(this.hand)
        return this
    }
}
  
const deck1 = new Deck();
const player1 = new Player("Jake")
deck1.reset().shuffle().deal(player1).deal(player1).deal(player1)
console.log(deck1.deck);
player1.discardCard(2).showHand().takeCard(deck1).takeCard(deck1).showHand()
this_card = player1.hand[2]
console.log(this_card)
this_card.show()

