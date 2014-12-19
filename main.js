
var p1 = {atk: Math.ceil(Math.random() * 5), def: Math.ceil(Math.random() * 5), res: Math.ceil(Math.random() * 5), HP: 0};
p1.HP = p1.res * 5;

var p2 = {atk: Math.ceil(Math.random() * 5), def: Math.ceil(Math.random() * 5), res: Math.ceil(Math.random() * 5), HP: 0};
p2.HP = p2.res * 5;

var attack = function (attacker, defender) {
    'use strict';
    var i, totalDMG = 0;
    
    // calcula dano
    for (i = 1; i <= attacker.atk; i += 1) {
        totalDMG += Math.ceil(Math.random() * 6);
    }
    
    //calcula defesa 
    for (i = 1; i <= defender.def; i += 1) {
        totalDMG -= Math.ceil(Math.random() * 6);
    }
    
    if (totalDMG > 0) {
        defender.HP -= totalDMG;
    }
};

var fight = function (p1, p2) {
    'use strict';
    var turn = 0;
    
    while (p1.HP > 0 && p2.HP > 0) {
        if (turn === 0) {
            attack(p1, p2);
        } else {
            attack(p2, p1);
        }
        turn = (turn + 1) % 2;
    }
    
    if (p1.HP <= 0) {
        window.console.log('Player 1 died from sickness!');
    } else {
        window.console.log('Player 2 died by a knife!');
    }
};