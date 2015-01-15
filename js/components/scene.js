var newScene = function (sceneContent, classes) {
    var newScene, oldScene, container, i;
    newScene = document.createElement('div');
    newScene.className = 'scene';

    for (i = 0; i < classes.length; i++) {
        newScene.className = newScene.className+' '+classes[i];
    }
    newScene.innerHTML = sceneContent;

    container = document.querySelector('body');
    oldScene = container.querySelector('.scene');
    container.removeChild(oldScene);

    container.appendChild(newScene);
};
