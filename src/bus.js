class Bus {
    /**
     * The Bus constructor
     * @param {bool} isInCarPark - If the bus is in the car park or not
     * @param {int} xCoordinate - X-coordinate
     * @param {int} yCoordinate - Y-coordinate
     * @param {string} direction - Direction of the bus
     * @constructor
     */
    constructor(isInCarPark, xCoordinate, yCoordinate, direction) {
      this.isInCarPark = isInCarPark;
      this.xCoordinate = xCoordinate;
      this.yCoordinate = yCoordinate;
      this.direction = direction;
    }
}

export default Bus;