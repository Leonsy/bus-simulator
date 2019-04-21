"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configuration = require("./utils/configuration");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CarPark =
/*#__PURE__*/
function () {
  /**
   * The CarPark constructor
   * @param {number} width - Width of the car park
   * @param {number} height - Height of the car park
   * @param {object} bus - The bus that need to park  
   * @constructor
   */
  function CarPark(width, height, bus) {
    _classCallCheck(this, CarPark);

    this.width = width;
    this.height = height;
    this.bus = bus;
  }
  /**
   * If we can place the bus in car park
   * @param  {number} xCoordinate - X-coordinate
   * @param  {number} yCoordinate - Y-coordinate
   */


  _createClass(CarPark, [{
    key: "canPlace",
    value: function canPlace(xCoordinate, yCoordinate) {
      return xCoordinate < this.width && yCoordinate < this.height;
    }
    /**
     * If we can move the bus in car park
     * @param  {string} direction - direction
     */

  }, {
    key: "canMove",
    value: function canMove() {
      switch (this.bus.direction) {
        case _configuration.directionName.NORTH:
          return this.bus.yCoordinate < this.height - 1;

        case _configuration.directionName.SOUTH:
          return this.bus.yCoordinate > 0;

        case _configuration.directionName.WEST:
          return this.bus.xCoordinate > 0;

        case _configuration.directionName.EAST:
          return this.bus.xCoordinate < this.width - 1;
      }
    }
  }]);

  return CarPark;
}();

var _default = CarPark;
exports["default"] = _default;