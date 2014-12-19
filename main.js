var attack = function (atk, def) {
    'use strict';
    var i, totalDMG = 0;
    
    // calcula dano
    for (i = 1; i <= atk[0]; i += 1) {
        totalDMG += Math.ceil(Math.random() * 6);
    }
    
    //calcula defesa 
    for (i = 1; i <= def[1]; i += 1) {
        totalDMG -= Math.ceil(Math.random() * 6);
    }
    
    if (totalDMG > 0) {
        def[3] -= totalDMG;
    }
};

var fight = function (p1, p2) {
    'use strict';
    var turn = 0;
    
    while (p1[3] > 0 && p2[3] > 0) {
        if (turn === 0) {
            attack(p1, p2);
        } else {
            attack(p2, p1);
        }
        turn = (turn + 1) % 2;
    }
    
    if (p1[3] <= 0) {
        window.console.log('Player 1 died from sickness!');
    } else {
        window.console.log('Player 2 died by a knife!');
    }
};