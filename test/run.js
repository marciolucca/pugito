const Pugito = require("../Pugito.js");
const pugito = new Pugito('src', 'dist', 'template', 'include');

pugito.clean();
pugito.compile();