"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _home = _interopRequireDefault(require("../views/pages/home.vue"));

var _proparties = _interopRequireDefault(require("../views/pages/proparties.vue"));

var _listproperty = _interopRequireDefault(require("../views/pages/listproperty.vue"));

var _aboutus = _interopRequireDefault(require("../views/pages/aboutus.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: 'home',
  component: _home["default"]
}, {
  path: '/properties',
  name: 'properties',
  component: _proparties["default"]
}, {
  path: '/list/properties',
  name: 'listProperties',
  component: _listproperty["default"]
}, {
  path: '/about/us',
  name: 'about_us',
  component: _aboutus["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHashHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;