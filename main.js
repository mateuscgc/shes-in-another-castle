
var attack = function (attacker, defender) {
    
    'use strict';
    var i, totalDMG = 0;
    
    // calcula dano
    for (i = 1; i <= attacker.attack; i += 1) {
        totalDMG += Math.ceil(Math.random() * 6);
    }
    
    //calcula defesa 
    for (i = 1; i <= defender.defense; i += 1) {
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
        window.console.log(p1.title + ' died from sickness!');
        return p2;
    } else {
        window.console.log(p2.title + ' died by a knife!');
        return p1;
    }
};

var newCharacter = function (name, points) {
    'use strict';
    if (points === undefined) {
        points = 10;
    }
    
    var character = {title: name, attack: 0, defense: 0, resistance: 0, HP: 0, initialHP: 0};
    
    if (points >= 5) {
        character.attack = Math.ceil(Math.random() * 5);
    } else {
        character.attack = Math.ceil(Math.random() * points);
    }
    points -= character.attack;
    
    if (points >= 5) {
        character.defense = Math.ceil(Math.random() * 5);
    } else {
        character.defense = Math.ceil(Math.random() * points);
    }
    points -= character.defense;
    
    if (points >= 5) {
        character.resistance = Math.ceil(Math.random() * 5);
    } else {
        character.resistance = Math.ceil(Math.random() * points);
    }
    points -= character.resistance;
    
    if (character.resistance === 0) {
        character.HP = 1;
    } else {
        character.HP = character.resistance * 5;
    }
    character.initialHP = character.HP;
    
    return character;
    
};

var newGame = function(name1, name2, points1, points2) {
    'use strict';
    if (points1 === undefined) {
        points1 = 10;
    }
    
    if (points2 === undefined) {
        points2 = 10;
    }
    
    return fight(newCharacter(name1, points1), newCharacter(name2, points2));
    
};