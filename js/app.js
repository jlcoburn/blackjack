"use strict";

function Player() {
  this.hand = [];
  this.total = 0;

  this.draw = function(num) {
    for(let i = 0; i < num; i++) {
      this.hand.push(cards[Math.floor(Math.random()*cards.length)]);
      console.log('drawing cards');
    }
  };

  this.addTotal = function() {
    for(let i = 0; i < this.hand.length; i++) {
      this.total+=parseInt(this.hand[i][2]);
    }
  };

  this.showHand = function() {
    document.getElementById("pCards").innerHTML = this.hand;
  }

}

var p = new Player();

p.draw(2);
p.addTotal();
p.showHand();
console.log(p.total);