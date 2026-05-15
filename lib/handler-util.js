'use strict';
const pug = require('pug')
const fs = require('node:fs');

function handleLogout(req, res) {
  res.writeHead(401, {
    'content-Type': 'text/html; charset=utf-8'
  });
  res.end(
    `<!DOCTYPE html><html lang="ja">
        <body>
            <h1>ログアウトしました</h1>
            <a href="/posts">ログイン</a>
        </body>
    </html>`
  );
}
function handleFavicon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/vnd.microsoft.icon',
    'Cache-Control': 'public, max-age=604800' 
  });
  const favicon = fs.readFileSync('./favicon.ico');
  res.end (favicon);
}

function handleStyleCssFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/css',
  });
  const file = fs.readFileSync('./public/style.css');
  res.end(file);
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'content-Type': 'text/html; charset=utf-8'
  });
  res.end(pug.renderFile('./views/404.pug'));
}

module.exports = {
  handleLogout,
  handleFavicon,
  handleStyleCssFile,
  handleNotFound,
};