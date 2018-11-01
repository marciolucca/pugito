const Pugito = require("../Pugito.js");
const pugito = new Pugito('src', 'dist', '8080', 'template', 'include');

pugito.clean();
pugito.compile();