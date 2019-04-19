import { directionName } from './utils/configuration';

class CarPark {
    /**
     * The CarPark constructor
     * @param {number} width - Width of the car park
     * @param {number} height - Height of the car park
     * @param {object} bus - The bus that need to park  
     * @constructor
     */
    constructor(width, height, bus) {
      this.width = width;
      this.height = height;
      this.bus = bus;
    }

    /**
     * If we can place the bus in car park
     * @param  {number} xCoordinate - X-coordinate
     * @param  {number} yCoordinate - Y-coordinate
     */
    canPlace( xCoordinate, yCoordinate ){
        return xCoordinate < this.width && yCoordinate < this.height;
    }

    /**
     * If we can move the bus in car park
     * @param  {string} direction - direction
     */
    canMove(){
        switch (this.bus.direction) {
            case directionName.NORTH:
                return this.car.yCoordinate < this.height -1;
            case directionName.SOUTH:
                return this.car.yCoordinate > 0;
            case directionName.WEST:
                return this.car.xCoordinate > 0;
            case directionName.EAST:
                return this.car.xCoordinate < this.width - 1;
        }
    }
}

export default CarPark;