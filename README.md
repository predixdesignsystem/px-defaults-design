# px-defaults-design

The Predix UI Defaults module contains variables and settings that are required for using nearly all Predix UI CSS modules. Use it to set the default font color, size, and vertical rhythm for your project.

## Dependencies

The `px-defaults-design` module depends on the following Px modules:

* [px-functions-design](https://github.com/PredixDev/px-functions-design)


## Installation

Install this module and its dependencies using bower:

    bower install --save px-defaults-design

Once installed, `@import` into your project's Sass file in its Settings layer:

    @import 'px-defaults-design/_settings.defaults.scss';

## Usage

You can change style variables to customize the design of the defaults module. To change styles, set any the variables below to a new     value above the module's `@import` statement in your project Sass file:

    $inuit-base-font-size
    $inuit-base-line-height
    $inuit-base-text-color
    $inuit-base-background-color
    $inuit-namespace

This module defines default style variables that many modules in your project will rely on. Take a look at the [Customize Styles section on the module's documentation page](https://predixdev.github.io/predix-ui/?show=px-defaults-design&type=css]) for a full list of available variables and instructions on how to use them.

The defaults provided are a good starting point for most projects. To change any of the variables, override them in your project Sass file by adding the new definitions above your `@import` line.

View the full API [here](http://predixdev.github.io/px-defaults-design/)
