# Defaults

The Predix Experience `defaults` module contains a few variables and settings that are **required** for using any of the rest of the framework.

## Sass Documentation

You can review Sass Documentation here: https://github.build.ge.com/pages/PXd/px-defaults-design/sassdoc

## Dependency

Px's Defaults module depends on one other Px module:

* [px-functions-design](https://github.build.ge.com/PXd/px-functions-design)

## Upstream dependency

The Defaults module is also an upstream dependency in this meta kit:

* [px-starter-kit-design](https://github.build.ge.com/PXd/px-starter-kit-design)

## Installation

Install this module and its dependency using bower:

    bower install --save https://github.build.ge.com/PXd/px-defaults-design.git

Once installed, `@import` into your project's Sass file in its Settings layer:

    @import "../px-defaults-design/settings.defaults";

See [px-getting-started](https://github.build.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`