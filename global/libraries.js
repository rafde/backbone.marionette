const _ = require('underscore');
const Backbone = require('backbone');
const jQuery = require('jquery');
Backbone.$ = jQuery;
Backbone.Radio = require('backbone.radio');
let Marionette = require('../src/backbone.marionette');
let ChildViewContainer = require('../src/child-view-container');

Marionette = 'default' in Marionette ? Marionette.default : Marionette;

ChildViewContainer = 'default' in ChildViewContainer ? ChildViewContainer.default : ChildViewContainer;

global.$ = global.jQuery = jQuery;
global._ = _;
global.Backbone = Backbone;
global.Marionette = Backbone.Marionette = Marionette;
global.ChildViewContainer = ChildViewContainer;
