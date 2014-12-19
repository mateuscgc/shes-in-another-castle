function Character(name, strength, skill, defense, resistance, firePower) {
    'use strict';
    this.name = name;
    this.strength = strength;
    this.skill = skill;
    this.defense = defense;
    this.resistance = resistance;
    this.firePower = firePower;
    this.initialHP = resistance > 0 ? this.resistance * 5 : 1;
    this.HP = this.initialHP;
    
    this.attacks = function (strength) {
        var i, dmg = 0;
        for (i = 1; i <= strength; i += 1) {
            dmg += strength * Math.ceil(Math.random() * 6);
        }
        return dmg;
    };
        
    this.defends = function (defense) {
        var i, def = 0;
        for (i = 1; i <= defense; i += 1) {
            def += defense * Math.ceil(Math.random() * 6);
        }
        return def;
    };
}


var attack = function (attacker, defender) {
    
    'use strict';
    var i, totalDMG = 0;
    
    // calcula dano
    totalDMG += attacker.attacks(attacker.strength);
    
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
        window.console.log(p1.name + ' died from sickness!');
        return p2;
    } else {
        window.console.log(p2.name + ' died by a knife!');
        return p1;
    }
};

var newCharacter = function (name, points) {
    'use strict';
    var str, skill, def, res, FP, c;
    
    if (points === undefined) {
        points = 10;
    }
   
    if (points >= 5) {
        str = Math.ceil(Math.random() * 5);
    } else {
        str = Math.ceil(Math.random() * points);
    }
    points -= str;
    
    if (points >= 5) {
        skill = Math.ceil(Math.random() * 5);
    } else {
        skill = Math.ceil(Math.random() * points);
    }
    points -= skill;
    
    if (points >= 5) {
        def = Math.ceil(Math.random() * 5);
    } else {
        def = Math.ceil(Math.random() * points);
    }
    points -= def;
    
    if (points >= 5) {
        res = Math.ceil(Math.random() * 5);
    } else {
        res = Math.ceil(Math.random() * points);
    }
    points -= res;
    
    if (points >= 5) {
        FP = Math.ceil(Math.random() * 5);
    } else {
        FP = Math.ceil(Math.random() * points);
    }
    points -= FP;
    
    c = new Character(name, str, skill, def, res, FP);
    
    return c;
};

var newGame = function (name1, name2, points1, points2) {
    'use strict';
    if (points1 === undefined) {
        points1 = 10;
    }
    
    if (points2 === undefined) {
        points2 = 10;
    }
    
    return fight(newCharacter(name1, points1), newCharacter(name2, points2));
    
};