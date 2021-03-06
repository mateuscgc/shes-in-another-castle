// Implementaçao antiga
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
        dmg += Math.ceil(Math.random() * 6);
    }
    return dmg;
};

Character.prototype.defends = function () {
    'use strict';
    var i, def = 0;
    for (i = 1; i <= this.defense; i += 1) {
        def += Math.ceil(Math.random() * 6);
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
    life = document.querySelector('#char_' + char.name + ' .char-HP');
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
    var container, char, request;
    container = document.querySelector('body');

    request = new XMLHttpRequest();
    request.open('GET', 'template.html', false);
    request.send();
    char = request.responseText.
        replace('{{name}}', this.p1.name).
        replace('{{name}}', this.p1.name).
        replace('{{str}}', this.p1.strength).
        replace('{{skill}}', this.p1.skill).
        replace('{{def}}', this.p1.defense).
        replace('{{res}}', this.p1.resistance).
        replace('{{FP}}', this.p1.firePower).
        replace('{{initialHP}}', this.p1.initialHP).
        replace('{{HP}}', this.p1.HP);

    container.innerHTML = char;

    char = request.responseText.
        replace('{{name}}', this.p2.name).
        replace('{{name}}', this.p2.name).
        replace('{{str}}', this.p2.strength).
        replace('{{skill}}', this.p2.skill).
        replace('{{def}}', this.p2.defense).
        replace('{{res}}', this.p2.resistance).
        replace('{{FP}}', this.p2.firePower).
        replace('{{initialHP}}', this.p2.initialHP).
        replace('{{HP}}', this.p2.HP);

    container.innerHTML += char;
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

var newCPU = function (name, points) {
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


var Game = function () {
    'use strict';
    var p1, p2, form, bNeseIntwChar;



    form = document.querySelector('#form_new_char');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name, str, skill, def, res, FP, container;
        name = this.querySelector('#char_name').value;
        str = parseInt(this.querySelector('#char_str').value, 0);
        skill = parseInt(this.querySelector('#char_skill').value, 0);
        def = parseInt(this.querySelector('#char_def').value, 0);
        res = parseInt(this.querySelector('#char_res').value, 0);
        FP = parseInt(this.querySelector('#char_FP').value, 0);
        p1 = new Character(name, str, skill, def, res, FP);
        p2 = newCPU('Gabriel');
        this.battle = new Battle(p1, p2);
        this.battle.fight();
    });
};
