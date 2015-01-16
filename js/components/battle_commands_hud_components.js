var BattleCommandsHUDComponent = function (selector) {
    this.container = document.querySelector(selector);
    this.render();
}

BattleCommandsHUDComponent.prototype = {
    render: function () {
        var template;
        template = '\
                <ul>\
                    <li id="atk_command">Attack</li>\
                </ul>';

        this.container.innerHTML = template;
    },
    startEventListeners: function(battle) {
        var atkCommand = document.querySelector('#atk_command');
        atkCommand.addEventListener('click', function(){
            battle.turn();
        });
    }
}
