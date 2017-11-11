/**
 * Created by ajsta on 5/4/2017.
 */

const PIXI = require('pixi.js');

var app = new PIXI.Application(500, 500, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

var thing = new PIXI.Graphics();

// set a fill and line style
thing.beginFill(0xFF3300);
thing.lineStyle(3, 0xffd900, 1);

// draw a shape
thing.moveTo(300, 300);
thing.lineTo(400, 400);
thing.endFill();

app.stage.addChild(thing);

// run the render loop
animate();

var count = 0;

function animate() {

    thing.clear();

    count = count >= 2 * Math.PI ? 0 : count + (2 * Math.PI) / 120;

    // set a fill and line style
    thing.beginFill(0xFF3300);
    thing.lineStyle(3, 0xffd900, 1);
    thing.moveTo(250, 250);
    thing.lineTo((1000 * Math.sin(count)), (1000 * Math.cos(count)));
    thing.lineTo((1000 * Math.sin(count + 0.8)), (1000 * Math.cos(count + 0.8)));
    thing.lineTo(250, 250);
    thing.endFill();

    requestAnimationFrame( animate );
}