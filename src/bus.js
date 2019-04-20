import { directionName, command } from './utils/configuration';
import { error, info, success } from './utils/messageWriter';
import message from './utils/message';

class Bus {
    /**
     * The Bus constructor
     * @param {boolean} isInCarPark - If the bus is in the car park or not
     * @param {number} xCoordinate - X-coordinate
     * @param {number} yCoordinate - Y-coordinate
     * @param {string} direction - Direction of the bus
     * @constructor
     */
    constructor(isInCarPark, xCoordinate, yCoordinate, direction) {
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
    place(xCoordinate, yCoordinate, direction) {
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.direction = direction;
        this.isInCarPark = true;

        success(message.placeSuccess);
    }

    /**
     * Move the bus
     */
    move() {
        switch (this.direction) {
            case directionName.NORTH:
                this.yCoordinate++;
                break;
            case directionName.SOUTH:
                this.yCoordinate--;
                break;
            case directionName.WEST:
                this.xCoordinate--;
                break;
            case directionName.EAST:
                this.xCoordinate++;
                break;
            default:
                error(message.invalidDirection);
                return;
        }

        success(message.moveSuccess);
    }

    /**
     * Turn the bus
     * @param  {string} turnDirection - Direction
     */
    turn(turnDirection) {
        const directions = [directionName.WEST, directionName.NORTH, directionName.EAST, directionName.SOUTH];
        let currentIndex = directions.indexOf(this.direction);
        switch (turnDirection) {
            case command.LEFT:
                currentIndex--;
                break;
            case command.RIGHT:
                currentIndex++;
                break;
            default:
                error(message.invalidDirection);
                return;
        }

        if (currentIndex < 0){
            this.direction = directionName.SOUTH;
        } 
        else if (currentIndex > 3){
            this.direction = directionName.WEST;
        }
        else{
            this.direction = directions[currentIndex];
        }
        success(message.turnSuccess);
    }

    /**
     * Report the bus location and direction
     *  @return {object} x|y coordinate and direction of the bus
     */
    report() {
        return {
            xCoordinate: this.xCoordinate,
            yCoordinate: this.yCoordinate,
            direction: this.direction
        }
    }
}

export default Bus;