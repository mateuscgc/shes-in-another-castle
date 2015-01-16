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
    this.lvl = 1;
};

Character.prototype = {
    isAlive: function () {
        'use strict';
        if (this.HP > 0)
            return true;
        return false;
    },
    attacks: function () {
        'use strict';
        return Math.ceil(Math.random() * 6) * this.strength;
    },
    defends: function () {
        'use strict';
        return Math.ceil(Math.random() * 6) * this.defense;
    }
};
