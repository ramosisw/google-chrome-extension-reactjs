const rimraf = require("rimraf");
const fs = require('fs');
const resizeImg = require('resize-img');

rimraf.sync("./dist/*");
rimraf.sync("./dist");
rimraf.sync("./build/*");
rimraf.sync("./build");
rimraf.sync("./public/icons/*");

(async () => {
    const sizes = [16, 19, 38, 48, 128, 256, 512];
    for await (let size of sizes) {
        let icon = await resizeImg(fs.readFileSync('./src/icon512x512.png'), {
            width: size,
            height: size
        });

        fs.writeFileSync(`./public/icons/icon${size}x${size}.png`, icon);
    }
})();