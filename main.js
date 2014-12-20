//Classe de Personagem
var Character = function (name, strength, skill, defense, resistance, firePower) {
    'use strict';
    this.name = name;
    this.strength = strength;
    this.skill = skill;
    this.defense = defense;
    this.resistance = resistance;
    this.firePower = firePower;
    this.initialHP = resistance > 0 ? this.resistance * 5 : 1;
    this.HP = this.initialHP;
};
Character.prototype.attacks = function () {
    'use strict';
    var i, dmg = 0;
    for (i = 1; i <= this.strength; i += 1) {
        dmg += this.strength * Math.ceil(Math.random() * 6);
    }
    return dmg;
};
        
Character.prototype.defends = function () {
    'use strict';
    var i, def = 0;
    for (i = 1; i <= this.defense; i += 1) {
        def += this.defense * Math.ceil(Math.random() * 6);
    }
    return def;
};

Character.prototype.display = function () {
    'use strict';
    var container, char, name;
    container = document.querySelector('body');
    char = document.createElement('div');
    
    name = document.createElement('h3');
    name.innerHTML = 'Nome: ' + this.name + '<br>' + 'Força: ' + this.strength;
    
    char.appendChild(name);
    container.appendChild(char);
};


// Classe de Combate
var Battle = function (p1, p2) {
    'use strict';
    this.p1 = p1;
    this.p2 = p2;
};

Battle.prototype.changeLife = function (char) {
    'use strict';
    var life;
    life = document.querySelector('#' + char.name);
    life.innerHTML = char.HP;
};

Battle.prototype.attack = function (attacker, defender) {
    'use strict';
    var i, totalDMG = 0;

    // calcula dano
    totalDMG += attacker.attacks();

    //calcula defesa 
    totalDMG -= defender.defends();

    if (totalDMG > 0) {
        defender.HP -= totalDMG;
        this.changeLife(defender);
    }
};
    
Battle.prototype.turn = function () {
    'use strict';
    this.attack(this.p1, this.p2);
    if (this.p2.HP <= 0) {
        window.console.log(this.p2.name + ' died from sickness!');
        return this.p2.name + ' died from sickness!';
    } else {
        this.attack(this.p2, this.p1);
        if (this.p1.HP <= 0) {
            window.console.log(this.p1.name + ' died by a knife!');
            return this.p1.name + ' died by a knife!';
        }
    }
};

Battle.prototype.displayFighters = function () {
    'use strict';
    var container, char, name, life;
    container = document.querySelector('body');
    
    char = document.createElement('div');
    name = document.createElement('h3');
    name.innerHTML = 'Nome: ' + this.p1.name;
    life = document.createElement('p');
    life.innerHTML = this.p1.HP;
    life.setAttribute('id', this.p1.name);

    char.appendChild(name);
    char.appendChild(life);
    container.appendChild(char);
    
    char = document.createElement('div');
    name = document.createElement('h3');
    name.innerHTML = 'Nome: ' + this.p2.name;
    life = document.createElement('p');
    life.innerHTML = this.p2.HP;
    life.setAttribute("id", this.p2.name);

    char.appendChild(name);
    char.appendChild(life);
    container.appendChild(char);
};

Battle.prototype.displayATKButton = function (battle) {
    'use strict';
    var container, button;

    container = document.querySelector('body');
    button = document.createElement('button');
    button.addEventListener('click', function () {
        battle.turn();
    });
    button.innerHTML = 'Atacar!';
    
    container.appendChild(button);
    
};

Battle.prototype.fight = function () {
    'use strict';
    this.displayFighters();
    this.displayATKButton(this);
};

var newPlayer = function (name, points) {
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


var Game = function (name1, name2, points1, points2) {
    'use strict';
    var p1, p2;
    p1 = newPlayer(name1, points1);
    p2 = newPlayer(name2, points2);
    
    if (points1 === undefined) {
        points1 = 10;
    }
    
    if (points2 === undefined) {
        points2 = 10;
    }
    this.battle = new Battle(p1, p2);
    this.battle.fight();
    
};