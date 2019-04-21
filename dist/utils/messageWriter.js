"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = exports.success = exports.info = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = console.log;
/**
 * To show a message to the console
 *
 * @param {string} message - The message to be displayed
 */

var info = function info(message) {
  if (process.env.NODE_ENV === 'test') return;
  log(_chalk["default"].magentaBright(message));
};
/**
 * To show a success message to the console
 *
 * @param {string} message - The message to be displayed
 */


exports.info = info;

var success = function success(message) {
  if (process.env.NODE_ENV === 'test') return;
  log(_chalk["default"].black.bgGreen(message));
};
/**
 * To show an error message to the console
 *
 * @param {string} message - The message to be displayed
 */


exports.success = success;

var error = function error(message) {
  if (process.env.NODE_ENV === 'test') return;
  log(_chalk["default"].white.bgRed(message));
};

exports.error = error;