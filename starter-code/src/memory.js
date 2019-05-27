class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    console.log(cards);
  }
  shuffleCards() {
    let longitud = this.cards.length;
    //if (i === 0) return false;
    while (--longitud) {
      let j = Math.floor(Math.random() * (longitud + 1));
      let tempi = this.cards[longitud];
      let tempj = this.cards[j];
      this.cards[longitud] = tempj;
      this.cards[j] = tempi;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    if (card1 !== card2) return false;
  }
  isFinished() {
    console.log(this.pairsGuessed, this.cards.length / 2, this.cards);
    if (this.pairsGuessed < this.cards.length / 2) return false;
    if (this.pairsGuessed == this.cards.length / 2) return true;
  }
}
