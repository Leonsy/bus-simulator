import { info, success, error } from './utils/messageWriter';
import Bus from './bus';
import CarPark from './carPark';
import { carParkSize } from './utils/configuration';
import message from './utils/message';
import readline from 'readline';

const run = () => {
    const rl = readline.createInterface({
        input: process.stdin
    });

    const bus = new Bus(false);
    const carPark = new CarPark(carParkSize.width, carParkSize.height, bus);

    info(message.welcome);
    info(message.carParkSize);

    rl.on('line', (input) => {
        const trimedInput = input.trim();

        if (!trimedInput.match(/PLACE\s\S|MOVE|LEFT|RIGHT|REPORT/)) {
            error(message.invalidCommand);
            return;
        }

        //If the bus is not in car park, only accept PLACE command
        if (!bus.isInCarPark && !trimedInput.match(/PLACE\s\d,\d,(NORTH|EAST|SOUTH|WEST)/)) {
            error(message.invalidCommand);
            return;
        }

        switch (true) {
            case trimedInput.match(/PLACE\s\d,\d,NORTH|EAST|SOUTH|WEST/) != null:
                const placeDetails = trimedInput.match(/\d,\d,(NORTH|EAST|SOUTH|WEST)/)[0].split(',');
                const x = parseInt(placeDetails[0]);
                const y = parseInt(placeDetails[1]);
                if (!carPark.canPlace(x, y)) {
                    error(message.invalidPlace);
                    return;
                }
                bus.place(x, y, placeDetails[2]);
                break;

            case trimedInput === 'MOVE':
                if (!carPark.canMove()) {
                    error(message.invalidMove);
                    return;
                }
                bus.move();
                break;

            case trimedInput === 'LEFT':
                bus.turn('LEFT');
                break;

            case trimedInput === 'RIGHT':
                bus.turn('RIGHT');
                break;

            case trimedInput === 'REPORT':
                info(`${bus.xCoordinate},${bus.yCoordinate},${bus.direction}`);
                break;

            default:
                error(message.invalidCommand);
        }

    });

}

run();
