const langs = require('./locals.json');

module.exports = (lang = 'en') => langs[lang] || langs['en'];
