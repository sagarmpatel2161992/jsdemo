var canvas;
var stage;
var hellotext;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameloop);
    main();
}

function gameloop() {
    hellotext.x++;
    hellotext.y++;
    stage.update();
}

function main() {
    hellotext = new createjs.Text("Hello World", "40px Consolas", "#000000");
    stage.addChild(hellotext);
}
//# sourceMappingURL=game.js.map
