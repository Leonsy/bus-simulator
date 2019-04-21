"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var message = {
  welcome: 'Welcome to bus simulator.',
  avaliableCommand: 'Avaliable commands are PLACE X,Y,F | MOVE | LEFT | RIGHT | REPORT | QUIT',
  placeCommand: 'Please PLACE the bus in the carpark at position X,Y and facing NORTH, SOUTH, EAST or WEST. (example: PLACE 0,0,NORTH)',
  invalidCommand: 'Invalid command',
  invalidPlace: 'Can not place the bus at this position',
  invalidMove: 'Can not move the bus',
  invalidDirection: 'Please provide a valid direction',
  placeSuccess: 'You successfully placed the bus',
  moveSuccess: 'You successfully moved the bus',
  turnSuccess: 'You successfully turned the bus'
};
var _default = message;
exports["default"] = _default;