var Game = function (player) {
    this.player = player;

    template = '\
            <div class="being player"></div>\
                <div class="player-hud hud"></div>\
                <div class="battle-actions-hud"></div>\
                <div class="enemy-hud hud"></div>';

    newScene(template, ['battle']);

    this.playerComponent = new PlayerComponent('.player', this.player);
    this.playerHUDComponent = new PlayerHUDComponent('.player-hud', this.player);

    this.playerComponent.render();
    this.playerHUDComponent.render();
};
