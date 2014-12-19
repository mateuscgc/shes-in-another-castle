
var attack = function (attacker, defender) {
    
    'use strict';
    var i, totalDMG = 0;
    
    // calcula dano
    totalDMG += attacker.hits(attacker.attack);
    
    //calcula defesa 
    totalDMG -= defender.defends(defender.defense);
    
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
    
    var character = {
        title: name,
        attack: 0,
        skill: 0,
        defense: 0,
        resistance: 0,
        firePower: 0,
        HP: 0,
        initialHP: 0,
        
        hits: function(attack) {
            var i, dmg = 0;
            for (i = 1; i <= attack; i += 1){
                dmg += attack * Math.ceil(Math.random() * 6);
            }
            return dmg;
        },
        
        defends: function (defense) {
            var i, def = 0;
            for (i = 1; i <= defense; i += 1){
                def += defense * Math.ceil(Math.random() * 6);
            }
            return def;
        }
    };
    
    if (points >= 5) {
        character.attack = Math.ceil(Math.random() * 5);
    } else {
        character.attack = Math.ceil(Math.random() * points);
    }
    points -= character.attack;
    
    if (points >= 5) {
        character.skill = Math.ceil(Math.random() * 5);
    } else {
        character.skill = Math.ceil(Math.random() * points);
    }
    points -= character.skill;
    
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
    
    if (points >= 5) {
        character.firePower = Math.ceil(Math.random() * 5);
    } else {
        character.firePower = Math.ceil(Math.random() * points);
    }
    points -= character.firePower;
    
    if (character.resistance === 0) {
        character.initialHP = 1;
    } else {
        character.initialHP = character.resistance * 5;
    }
    character.HP = character.initialHP;
    
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