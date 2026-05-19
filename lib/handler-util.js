'use strict';
const fs = require('node:fs');
const path = require('node:path');

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
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
    'Content-Type': 'image/x-icon',
    'Cache-Control': 'public, max-age=604800'
  });
  try {
    const favicon = fs.readFileSync(path.join(__dirname, '..', 'favicon.ico'));
    res.end(favicon);
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('favicon が見つかりません');
  }
}

function handleStyleCssFile(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
  try {
    const file = fs.readFileSync(path.join(__dirname, '..', 'public', 'style.css'));
    res.end(file);
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('CSS ファイルが見つかりません');
  }
}
function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりません');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のメソッドです');
}

module.exports = {
  handleLogout,
  handleFavicon,
  handleStyleCssFile,
  handleNotFound,
  handleBadRequest,
};