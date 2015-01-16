var Battle = function (p, pc, phc, e, ec, ehc) {
    'use strict';
    this.p = p;
    this.pc = pc;
    this.phc = phc;
    this.e = e;
    this.ec = ec;
    this.ehc = ehc;
};

Battle.prototype.attack = function (attacker, defender) {
    'use strict';
    var i, totalDMG;

    totalDMG = Math.max(attacker.attacks() - defender.defends() , 0);
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
