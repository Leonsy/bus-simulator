"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _messageWriter = require("./utils/messageWriter");

var _configuration = require("./utils/configuration");

var _message = _interopRequireDefault(require("./utils/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Simulator =
/*#__PURE__*/
function () {
  /**
   * The Simulator constructor
   * @param {object} carPark - The car park
   * @param {object} bus - The bus
   * @constructor
   */
  function Simulator(carPark, bus) {
    _classCallCheck(this, Simulator);

    this.carPark = carPark;
    this.bus = bus;
  }
  /**
  * Handle user's input
  * @param  {string} input - User's input
  */


  _createClass(Simulator, [{
    key: "handleInput",
    value: function handleInput(input) {
      var trimedInput = input.trim();

      if (trimedInput === _configuration.command.QUIT) {
        process.exit();
      }

      if (!trimedInput.match(_configuration.regex.validCommand)) {
        (0, _messageWriter.error)(_message["default"].invalidCommand);
        return;
      } //If the bus is not in car park, only accept PLACE command


      if (!this.bus.isInCarPark && !trimedInput.match(_configuration.regex.validPlaceCommand)) {
        (0, _messageWriter.error)(_message["default"].invalidCommand);
        return;
      }

      switch (true) {
        case trimedInput.match(_configuration.regex.validPlaceCommand) != null:
          try {
            var placeDetails = trimedInput.match(_configuration.regex.validPlaceDetail)[0].split(',');
            var x = parseInt(placeDetails[0]);
            var y = parseInt(placeDetails[1]);

            if (!this.carPark.canPlace(x, y)) {
              (0, _messageWriter.error)(_message["default"].invalidPlace);
              break;
            }

            this.bus.place(x, y, placeDetails[2]);
          } catch (e) {
            (0, _messageWriter.error)(_message["default"].invalidCommand);
          }

          break;

        case trimedInput === _configuration.command.MOVE:
          if (!this.carPark.canMove()) {
            (0, _messageWriter.error)(_message["default"].invalidMove);
            break;
          }

          this.bus.move();
          break;

        case trimedInput === _configuration.command.LEFT:
          this.bus.turn(_configuration.command.LEFT);
          break;

        case trimedInput === _configuration.command.RIGHT:
          this.bus.turn(_configuration.command.RIGHT);
          break;

        case trimedInput === _configuration.command.REPORT:
          var _this$bus$report = this.bus.report(),
              xCoordinate = _this$bus$report.xCoordinate,
              yCoordinate = _this$bus$report.yCoordinate,
              direction = _this$bus$report.direction;

          (0, _messageWriter.success)("".concat(xCoordinate, ",").concat(yCoordinate, ",").concat(direction));
          break;

        default:
          (0, _messageWriter.error)(_message["default"].invalidCommand);
      }

      (0, _messageWriter.info)(_message["default"].avaliableCommand);
    }
  }]);

  return Simulator;
}();

var _default = Simulator;
exports["default"] = _default;