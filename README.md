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

Pug templates and partials (also called includes) are not meant to be processed directly. To avoid it, follow the file name patterns from [Options](#options) section.

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

## Options
 - -s, --src [path]       source path (default: "src")
 - -d, --dist [path]      destination path (default: "dist")
 - -p, --port [number]    port for running in localhost (default: "8080")
 - -t, --template [name]  what the name for a template file should contain (default: "template")
 - -i, --include [name]   what the name for an include/partial file should contain (default: "include")
 - -h, --help             output usage information

## TODO
 - Create descriptive console output of file processing
 - Treat common errors to give better user feedback
