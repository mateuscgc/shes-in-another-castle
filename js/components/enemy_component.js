var EnemyComponent = function (selector, enemy) {
    this.container = document.querySelector(selector);
    this.enemy = enemy;
};

EnemyComponent.prototype = {
    render: function () {
        this.container.style.backgroundImage = 'url(img/enemy.gif)';
    }
};
