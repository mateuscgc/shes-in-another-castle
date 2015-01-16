var Battle = function (p, pc, phc, e, ec, ehc) {
    'use strict';
    this.p = p;
    this.pc = pc;
    this.phc = phc;
    this.e = e;
    this.ec = ec;
    this.ehc = ehc;
    console.log(p.HP);
};

Battle.prototype.attack = function (attacker, defender) {
    'use strict';
    console.log("hp"+defender.HP);

    var i, totalDMG;

    console.log("ihp"+defender.HP);
    totalDMG = Math.max(attacker.attacks() - defender.defends() , 0);
    console.log("dmg"+totalDMG);
    defender.HP -= totalDMG;
    // this.changeLife(defender);
};

Battle.prototype.turn = function () {
    'use strict';
    this.attack(this.p, this.e);
    this.ehc.render();
    if (this.e.HP <= 0) {
        alert(this.e.name + ' died from sickness!');
    } else {
        this.attack(this.e, this.p);
        this.phc.render();
        if (this.p.HP <= 0) {
            alert(this.p.name + ' died by a knife!');
        }
    }
};
