# aurelia-form-renderer-bootstrap

[![Build Status](https://travis-ci.org/SpoonX/aurelia-form-renderer-bootstrap.svg)](https://travis-ci.org/SpoonX/aurelia-form-renderer-bootstrap)
[![Known Vulnerabilities](https://snyk.io/test/npm/name/badge.svg)](https://snyk.io/test/npm/aurelia-form-renderer-bootstrap)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

Bootstrap form renderer for aurelia and aurelia form.

## Documentation

The [changelog](doc/changelog.md) provides you with information about important changes.

## Uses

## Used by

## Installation

### Aureli-Cli

Run `npm i aurelia-form-renderer-bootstrap --save` from your project root.

And add following to the `build.bundles.dependencies` section of `aurelia-project/aurelia.json`.

```js
  "aurelia-form-renderer-bootstrap",
```

### Jspm

Run `jspm i aurelia-form-renderer-bootstrap`

And add following to the `bundles.dist.aurelia.includes` section of `build/bundles.js`:

```js
  "aurelia-form-renderer-bootstrap",
```

### Webpack

Run `npm i aurelia-form-renderer-bootstrap --save` from your project root.

Add `aurelia-form-renderer-bootstrap` in the `coreBundles.aurelia section` of your `webpack.config.js`.

### Typescript

Npm-based installations pick up the typings automatically. For Jspm-based installations, run `typings i github:spoonx/aurelia-form-renderer-bootstrap` or add `"aurelia-form-renderer-bootstrap": "github:spoonx/aurelia-form-renderer-bootstrap",` to your `typings.json` and run `typings i`.

## Example
