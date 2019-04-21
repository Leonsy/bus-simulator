"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configuration = require("./utils/configuration");

var _messageWriter = require("./utils/messageWriter");

var _message = _interopRequireDefault(require("./utils/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bus =
/*#__PURE__*/
function () {
  /**
   * The Bus constructor
   * @param {boolean} isInCarPark - If the bus is in the car park or not
   * @param {number} xCoordinate - X-coordinate
   * @param {number} yCoordinate - Y-coordinate
   * @param {string} direction - Direction of the bus
   * @constructor
   */
  function Bus(isInCarPark, xCoordinate, yCoordinate, direction) {
    _classCallCheck(this, Bus);

    this.isInCarPark = isInCarPark;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.direction = direction;
  }
  /**
   * Place the bus
   * @param  {number} xCoordinate - X-coordinate
   * @param  {number} yCoordinate - Y-coordinate
   * @param  {string} direction - Direction
   */


  _createClass(Bus, [{
    key: "place",
    value: function place(xCoordinate, yCoordinate, direction) {
      this.xCoordinate = xCoordinate;
      this.yCoordinate = yCoordinate;
      this.direction = direction;
      this.isInCarPark = true;
      (0, _messageWriter.success)(_message["default"].placeSuccess);
    }
    /**
     * Move the bus
     */

  }, {
    key: "move",
    value: function move() {
      switch (this.direction) {
        case _configuration.directionName.NORTH:
          this.yCoordinate++;
          break;

        case _configuration.directionName.SOUTH:
          this.yCoordinate--;
          break;

        case _configuration.directionName.WEST:
          this.xCoordinate--;
          break;

        case _configuration.directionName.EAST:
          this.xCoordinate++;
          break;

        default:
          (0, _messageWriter.error)(_message["default"].invalidDirection);
          return;
      }

      (0, _messageWriter.success)(_message["default"].moveSuccess);
    }
    /**
     * Turn the bus
     * @param  {string} turnDirection - Direction
     */

  }, {
    key: "turn",
    value: function turn(turnDirection) {
      var directions = [_configuration.directionName.WEST, _configuration.directionName.NORTH, _configuration.directionName.EAST, _configuration.directionName.SOUTH];
      var currentIndex = directions.indexOf(this.direction);

      switch (turnDirection) {
        case _configuration.command.LEFT:
          currentIndex--;
          break;

        case _configuration.command.RIGHT:
          currentIndex++;
          break;

        default:
          (0, _messageWriter.error)(_message["default"].invalidDirection);
          return;
      }

      if (currentIndex < 0) {
        this.direction = _configuration.directionName.SOUTH;
      } else if (currentIndex > 3) {
        this.direction = _configuration.directionName.WEST;
      } else {
        this.direction = directions[currentIndex];
      }

      (0, _messageWriter.success)(_message["default"].turnSuccess);
    }
    /**
     * Report the bus location and direction
     *  @return {object} x|y coordinate and direction of the bus
     */

  }, {
    key: "report",
    value: function report() {
      return {
        xCoordinate: this.xCoordinate,
        yCoordinate: this.yCoordinate,
        direction: this.direction
      };
    }
  }]);

  return Bus;
}();

var _default = Bus;
exports["default"] = _default;