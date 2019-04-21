"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regex = exports.command = exports.carParkSize = exports.directionName = void 0;
var directionName = {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  EAST: 'EAST',
  WEST: 'WEST'
};
exports.directionName = directionName;
var carParkSize = {
  width: 5,
  height: 5
};
exports.carParkSize = carParkSize;
var command = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  MOVE: 'MOVE',
  REPORT: 'REPORT',
  QUIT: 'QUIT'
};
exports.command = command;
var regex = {
  validCommand: /PLACE\s\S|MOVE|LEFT|RIGHT|REPORT/,
  validPlaceCommand: /PLACE\s\d,\d,(NORTH|EAST|SOUTH|WEST)/,
  validPlaceDetail: /\d,\d,(NORTH|EAST|SOUTH|WEST)/
};
exports.regex = regex;