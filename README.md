# Pugito

Pugito is a simple way to use Pug as a static website generator.
 
## Installation

After installing the latest version of [Node.js](http://nodejs.org/), install with:

```bash
$ npm install pugito -g
```

and run with:

```bash
$ pugito compile
```

## Commands
 - `$ pugito compile`: Scans the `src/` folder and copies all files to `dist/` while processing `.pug` to `.html`
 - `$ pugito clean`: Erases `dist/` folder
 - `$ pugito live`: Serves `dist/` on `localhost:8080`. Keeps watching `src/` and calling `compile` on any change

## TODO
 - Make local server port configurable
 - Make src and dist folders configurable
