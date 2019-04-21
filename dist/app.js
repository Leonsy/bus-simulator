"use strict";

var _messageWriter = require("./utils/messageWriter");

var _bus = _interopRequireDefault(require("./bus"));

var _carPark = _interopRequireDefault(require("./carPark"));

var _simulator = _interopRequireDefault(require("./simulator"));

var _configuration = require("./utils/configuration");

var _message = _interopRequireDefault(require("./utils/message"));

var _readline = _interopRequireDefault(require("readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var run = function run() {
  var rl = _readline["default"].createInterface({
    input: process.stdin
  });

  var bus = new _bus["default"](false);
  var carPark = new _carPark["default"](_configuration.carParkSize.width, _configuration.carParkSize.height, bus);
  var simulator = new _simulator["default"](carPark, bus);
  (0, _messageWriter.info)(_message["default"].welcome);
  (0, _messageWriter.info)(_message["default"].placeCommand);
  rl.on('line', function (input) {
    simulator.handleInput(input);
  });
};

run();