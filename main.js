var fight = function (atk, arm) {
    'use strict';
    if (atk > arm) {
        return 'First';
    }
    return 'Second';
};

var p1 = [Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5)];
p1[3] = p1[2] * 5;
var p2 = [Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5)];
p2[3] = p2[2] * 5;