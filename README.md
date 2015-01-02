angular-annotator
=================

An angularjs directive that wraps [annotator.js](http://annotatorjs.org) functionality.

This is WIP so expect breaking changes!


## Requirements

- JQuery >=1.6
- AngularJS >=1.2
- annotatorjs 1.2.x

## Bower

You can install this package through `Bower` by using the following command :

    bower install angular-annotator

## Usage

Basic:

    <div mw-annotator></div>

You can optionally specify annotator.js options:

    <div mw-annotator="options"></div>

You can enable annotator [plugins](http://docs.annotatorjs.org/en/v1.2.x/plugins/index.html)  e.g.:

    <div mw-annotator annotator-tags="{}" annotator-permissions="{user: 'Alice'}" annotator-store="storeOptions" annotator-filter="filterOptions" annotatorMarkdown="true"></div>

You can also enable any custom plugins  e.g.:

    <div mw-annotator annotator-plugins="[{name: 'Store', options: storeOptions}, 'Tags', 'AnnotatorViewer']"></div>