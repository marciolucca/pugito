# Pugito

Simple tool to generate static sites using [PugJS](https://pugjs.org).
 
## Installation

After installing the latest version of [Node.js](http://nodejs.org/), install _Pugito_ with:

```bash
$ npm install pugito -g
```

## Commands

### compile

Scans the `src/` folder and copies all files to `dist/` while processing `.pug` to `.html`. 

Pug _templates_ and _partials_ (also called _includes_) are not meant to be processed directly. Check the options below to follow the default file name patterns or to change them.

#### Options

```
-l, --live             watches source path for live compilation (default: false)
-s, --src <path>       source path (default: "src")
-d, --dist <path>      destination path (default: "dist")
-t, --template <name>  what the name for a template file should contain (default: "template")
-i, --include <name>   what the name for an include/partial file should contain (default: "include")
-h, --help             display help for command
```

```bash
$ pugito compile
```

### clean

Erases `dist/` folder.

#### Options
```
-d, --dist [path]      destination path (default: "dist")
-h, --help             output usage information
```

```bash
$ pugito clean
```

## TODO
 - Create descriptive console output of file processing
 - Treat common errors to give better user feedback
