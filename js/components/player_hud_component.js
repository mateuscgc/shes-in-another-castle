var PlayerHUDComponent = function (selector, player) {
    this.container = document.querySelector(selector);
    this.player = player;
};

PlayerHUDComponent.prototype = {
    render: function () {
        var template;
        template = '\
                <table>\
                    <tr>\
                        <th></th>\
                        <th>HP</th>\
                    </tr>\
                    <tr>\
                        <th>{{name}}</th>\
                        <th>{{HP}} / {{initialHP}}</th>\
                    </tr>\
                </table>';

        this.container.innerHTML = template.
            replace('{{name}}', this.player.name).
            replace('{{HP}}', this.player.HP).
            replace('{{initialHP}}', this.player.initialHP);
    }
};
