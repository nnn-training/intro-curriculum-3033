'use strict';
const fs = require('node:fs');

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end('<!DOCTYPE html><html lang="ja"><body><h1>ログアウトしました</h1><a href="/posts">ログイン</a></body></html>');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<p>ページがみつかりません</p>');
  res.end();
}

function handleFavicon(req, res) {
  res.writeHead(200, { 'Content-Type': 'image/vnd.microsoft.icon' });
  const favicon = fs.readFileSync('./public/favicon.ico');
  res.end(favicon);
}

function handleStyleCssFile(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
  const styleCss = fs.readFileSync('./public/style.css');
  res.end(styleCss);
}

module.exports = {
  handleLogout,
  handleNotFound,
  handleFavicon,
  handleStyleCssFile
};