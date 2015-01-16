var Game = function (player) {
    this.player = player;

    template = '\
            <div class="being player"></div>\
            <div class="being enemy"></div>\
                <div class="player-hud hud"></div>\
                <div class="battle-actions-hud hud"></div>\
                <div class="enemy-hud hud"></div>';

    newScene(template, ['battle']);

    this.playerComponent = new PlayerComponent('.player', this.player);
    this.playerHUDComponent = new PlayerHUDComponent('.player-hud', this.player);

    this.playerComponent.render();
    this.playerHUDComponent.render();

    this.battleCommandsHUDComponent = new BattleCommandsHUDComponent('.battle-actions-hud');

    while (this.player.isAlive()) {
        this.enemy = newCPU(this.player);

        this.enemyComponent = new EnemyComponent('.enemy',this.enemy);
        this.enemyHUDComponent = new EnemyHUDComponent('.enemy-hud', this.enemy);

        this.enemyComponent.render();
        this.enemyHUDComponent.render();

        this.battle = new Battle (player, playerComponent, playerHUDComponent, enemy, enemyComponent, enemyHUDComponent);
        this.battleCommandsHUDComponent.startEventListeners(this.battle);


        this.player.HP = 0;
    }
};
