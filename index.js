const PORT = '8080';

const { readdirSync, statSync } = require('node:fs');
const { join } = require('node:path');
const express = require('express');
const app = express();
const publicPath = join(__dirname, 'public');
const currentDirectory = readdirSync(__dirname);
if (!currentDirectory.includes('public')) throw new Error(`${publicPath} cannot be found!`);
const public = statSync(publicPath);
if (!public.isDirectory()) throw new Error(`${publicPath} should be a directory.`);
const publicFiles = readdirSync(publicPath);
if (publicFiles.length == 0) return;
app.use(express.static(publicPath));
app.listen(PORT, () => void(
	console.log(`Listening on http://localhost:${PORT}`)
));
