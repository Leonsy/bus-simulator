import { info, success, error } from './utils/messageWriter';
import Bus from './bus';
import CarPark from './carPark';
import { carParkSize, command, regex } from './utils/configuration';
import message from './utils/message';
import readline from 'readline';

const bus = new Bus(false);
const carPark = new CarPark(carParkSize.width, carParkSize.height, bus);

const run = () => {
    const rl = readline.createInterface({
        input: process.stdin
    });

    info(message.welcome);
    info(message.placeCommand);

    rl.on('line', handleInput);

}

const handleInput = (input) => {

    const trimedInput = input.trim();

    if(trimedInput === command.QUIT){
        process.exit();
    }

    if (!trimedInput.match(regex.validCommand)) {
        error(message.invalidCommand);
        return
    }

    //If the bus is not in car park, only accept PLACE command
    if (!bus.isInCarPark && !trimedInput.match(regex.validPlaceCommand)) {
        error(message.invalidCommand);
        return;
    }

    switch (true) {
        case trimedInput.match(regex.validPlaceCommand) != null:
            const placeDetails = trimedInput.match(regex.validPlaceDetail)[0].split(',');
            const x = parseInt(placeDetails[0]);
            const y = parseInt(placeDetails[1]);
            if (!carPark.canPlace(x, y)) {
                error(message.invalidPlace);
                break;
            }
            bus.place(x, y, placeDetails[2]);
            break;

        case trimedInput === command.MOVE:
            if (!carPark.canMove()) {
                error(message.invalidMove);
                break;
            }
            bus.move();
            break;

        case trimedInput === command.LEFT:
            bus.turn(command.LEFT);
            break;

        case trimedInput === command.RIGHT:
            bus.turn(command.RIGHT);
            break;

        case trimedInput === command.REPORT:
            success(`${bus.xCoordinate},${bus.yCoordinate},${bus.direction}`);
            break;

        default:
            error(message.invalidCommand);
    }

    info(message.avaliableCommand);
}

run();
