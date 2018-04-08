# Pugito

Pugito is a simple way to use Pug as a static website generator.
 
## Installation

After installing the latest version of [Node.js](http://nodejs.org/), install with:

```bash
$ npm install pugito -g
```

## Commands
### compile

Scans the `src/` folder and copies all files to `dist/` while processing `.pug` to `.html`. 

Pug templates and partials (also called includes) are not meant to be processed directly. To avoid it, follow the file name patterns from [defaults](#defaults) section.

```bash
$ pugito compile
```

### clean

Erases `dist/` folder.

```bash
$ pugito clean
```

### live

Serves `dist/` on `localhost:8080`. Keeps watching `src/` and calling `compile` on any change detected.

```bash
$ pugito live
```

## Defaults
 - Local server runs on port `8080`
 - Source base directory is `src/`
 - Destination base directory is `dist/`
 - Valid file name for templates shall contain `template.` (example: `template.main.pug`)
 - Valid file name for partials shall contain `include.` (example: `include.menu.pug`)

## TODO
 - Make local server port configurable
 - Make src and dist folders configurable
 - Make Template and partial file names patterns configurable
 - Create descriptive console output for file processing
 - Treat common errors to give better user feedback
