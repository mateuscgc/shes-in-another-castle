var PlayerComponent = function (selector, player) {
    this.container = document.querySelector(selector);
    this.player = player;
};

PlayerComponent.prototype = {
    render: function () {
        this.container.style.backgroundImage = 'url(img/crono.jpg)';
    }
};
