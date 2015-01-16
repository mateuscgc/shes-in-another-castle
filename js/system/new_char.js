var createChar = function () {
    var newCharScene, request;

    template = '\
                    <div class="new-char">\
                        <h3>Create your character</h3>\
                        <form action="#" method="#" id="new_char_form">\
                            <label for="name">Name</label>\
                            <input type="text" name="name" id="char_name" required focus>\
                            <ul>\
                                <li>5 skill points to use</li>\
                                <li>Strength <input type="number" min="0" max="5" id="char_str"></li>\
                                <li>Defense <input type="number" min="0" max="5" id="char_def"></li>\
                                <li>Ability <input type="number" min="0" max="5" id="char_skill"></li>\
                                <li>Resistance <input type="number" min="0" max="5" id="char_res"></li>\
                                <li>Fire Power <input type="number" min="0" max="5" id="char_FP"></li>\
                            </ul>\
                            <button type="submit" form="new-char-form" class="btn btn-new-char" id="new_char_btn">\
                                <div class="arrow-right"></div>\
                                Create\
                            </button>\
                        </form>\
                    </div>';

    newScene(template, []);

    var formBtn = document.querySelector('#new_char_btn');
    formBtn.addEventListener('click', function(){
        var form, name, str, def, skill, res, FP, container, player, game;
        form = document.querySelector('#new_char_form');

        name = form.querySelector('#char_name').value;
        str = parseInt(form.querySelector('#char_str').value, 0);
        def = parseInt(form.querySelector('#char_def').value, 0);
        skill = parseInt(form.querySelector('#char_skill').value, 0);
        res = parseInt(form.querySelector('#char_res').value, 0);
        FP = parseInt(form.querySelector('#char_FP').value, 0);

        player = new Character(name, str, def, skill, res, FP);
        Game(player);
    });
};
