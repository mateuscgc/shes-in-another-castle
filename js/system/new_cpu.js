var newCPU = function (player) {
    'use strict';
    var points, str, skill, def, res, FP, c, limit;

    points = 5 + player.lvl - 1;
    limit = (5 + player.lvl) / 2;

    str = Math.ceil(Math.random() * Math.min(limit, points));
    points = Math.max(points - str, 0);

    skill = Math.ceil(Math.random() * Math.min(limit, points));
    points = Math.max(points - skill, 0);

    def = Math.ceil(Math.random() * Math.min(limit, points));
    points = Math.max(points - def, 0);

    res = Math.ceil(Math.random() * Math.min(limit, points));
    points = Math.max(points - res, 0);

    FP = Math.ceil(Math.random() * Math.min(limit, points));
    points = Math.max(points - FP, 0);
    c = new Character('Bixu Ruim', str, skill, def, res, FP);

    return c;
};
