var EnemyHUDComponent = function (selector, enemy) {
    this.container = document.querySelector(selector);
    this.enemy = enemy;
};

EnemyHUDComponent.prototype = {
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
            replace('{{name}}', this.enemy.name).
            replace('{{HP}}', this.enemy.HP).
            replace('{{initialHP}}', this.enemy.initialHP);
    }
};
