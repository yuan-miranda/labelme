const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

if (!fs.existsSync("./img")) fs.mkdirSync("./img");

const WIDTH = 848;
const HEIGHT = 477;
const canvas = createCanvas(WIDTH, HEIGHT);

const context = canvas.getContext('2d');
const images = fs.readdirSync("./img");

for (let i = 0; i < images.length; i++) {
    loadImage(`./img/${images[i]}`).then((img) => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        context.fillStyle = "white";
        context.fillRect(790, 18, 50, 50);

        context.fillStyle = "black";
        context.font = "bold 30px Arial";

        if (i < 9) context.fillText(`0${i + 1}`, 800, 52);
        else context.fillText(`${i + 1}`, 800, 52);

        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(`./img/${images[i]}`, buffer);
    });
}

