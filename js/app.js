"use strict";

function Player() {
  this.hand = [];
  this.total = 0;
  this.value = 0;

  this.draw = function(num) {
    for(let i = 0; i < num; i++) {
      this.hand.push(cards[Math.floor(Math.random()*cards.length)]);
      console.log('drawing cards');
    }
  };

  this.addTotal = function() {
    for(let i = 0; i < this.hand.length; i++) {
      if (this.hand[i][2] == 'K' || this.hand[i][2] == 'Q' || this.hand[i][2] == 'J') {
            this.value = 10;
      } else {
        this.value = parseInt(this.hand[i][2]);
      }
      this.total+=this.value;
    }
  };

  this.showHand = function() {
    document.getElementById("pCards").innerHTML = this.hand;
  };
}

var p = new Player();

p.draw(2);
p.addTotal();
p.showHand();
console.log(p.total);