const rimraf = require('rimraf');
const fse = require('fs-extra');
const zip = require('cross-zip')

const origin = './build';
const destination = './dist';

if (!fse.existsSync(destination)) {
    fse.mkdirSync(destination);
}

fse.copySync(origin, destination);
rimraf.sync("./build/*");
rimraf.sync("./build");
zip.zipSync(destination, destination + '.zip')
// un coment to do more semantic, also make change on manifest.json
// fse.renameSync(`${destination}/index.html`,`${destination}/options.html`);