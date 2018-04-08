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

### Defaults
 - Local server runs on port 8080
 - Source base directory is `src/`
 - Destination base directory is `dist/`
 - Valid file name for templates shall contain `template.`. For example: `template.main.pug`
 - Valid file name for partials shall contain `include.`. For example: `include.menu.pug`

## TODO
 - Make local server port configurable
 - Make src and dist folders configurable
 - Make Template and partial file names patterns configurable
 - Create descriptive console output for file processing
 - Treat common errors to give better user feedback
