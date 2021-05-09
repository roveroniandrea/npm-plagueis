#!/usr/bin/env node
const plagueis = require('./index');

const lang = process.argv[2]?.replace(/-/g, '') || 'en';

console.log(plagueis(lang));