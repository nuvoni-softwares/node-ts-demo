import fs from 'fs';

const version = process.env.CIRCLE_BUILD_NUM || 1;

const html = fs.readFileSync('public/logo.html').toString(),
    reg = new RegExp('(<div class="version">)([a-zA-Z0-9 ]*)(</div>)'),
    new_version = html.replace(reg, `$1Deploy version ${version}$3`);

fs.writeFileSync('public/logo.html', new_version)