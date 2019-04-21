import { info, success, error } from './utils/messageWriter';
import { command, regex } from './utils/configuration';
import message from './utils/message';

class Simulator {
    /**
     * The Simulator constructor
     * @param {object} carPark - The car park
     * @param {object} bus - The bus
     * @constructor
     */
    constructor(carPark, bus) {
        this.carPark = carPark;
        this.bus = bus;
    }

    /**
    * Handle user's input
    * @param  {string} input - User's input
    */
    handleInput(input) {

        const trimedInput = input.trim();

        if (trimedInput === command.QUIT) {
            process.exit();
        }

        if (!trimedInput.match(regex.validCommand)) {
            error(message.invalidCommand);
            return
        }

        //If the bus is not in car park, only accept PLACE command
        if (!this.bus.isInCarPark && !trimedInput.match(regex.validPlaceCommand)) {
            error(message.invalidCommand);
            return;
        }

        switch (true) {
            case trimedInput.match(regex.validPlaceCommand) != null:
                try {
                    const placeDetails = trimedInput.match(regex.validPlaceDetail)[0].split(',');
                    const x = parseInt(placeDetails[0]);
                    const y = parseInt(placeDetails[1]);
                    if (!this.carPark.canPlace(x, y)) {
                        error(message.invalidPlace);
                        break;
                    }
                    this.bus.place(x, y, placeDetails[2]);
                } catch (e) {
                    error(message.invalidCommand);
                }
                break;

            case trimedInput === command.MOVE:
                if (!this.carPark.canMove()) {
                    error(message.invalidMove);
                    break;
                }
                this.bus.move();
                break;

            case trimedInput === command.LEFT:
                this.bus.turn(command.LEFT);
                break;

            case trimedInput === command.RIGHT:
                this.bus.turn(command.RIGHT);
                break;

            case trimedInput === command.REPORT:
                const { xCoordinate, yCoordinate, direction } = this.bus.report();
                success(`${xCoordinate},${yCoordinate},${direction}`);
                break;

            default:
                error(message.invalidCommand);
        }

        info(message.avaliableCommand);
    }
}

export default Simulator;

