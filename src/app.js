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

    const bus = new Bus(true);
    const carPark = new CarPark(carParkSize.width, carParkSize.height, bus);

    info(message.welcome);
    info(message.carParkSize);

    rl.on('line', (input) => {
        const trimedInput = input.trim();

        if (!trimedInput.match(/PLACE\s\S|MOVE|LEFT|RIGHT|REPORT/)) {
            error(message.invalidCommand);
            return;
        }

        if (!bus.isInCarPark && !trimedInput.match(/PLACE\s\d,\d,NORTH|EAST|SOUTH|WEST/)) {
            error(message.invalidCommand);
            return;
        }

        switch (true) {
            case trimedInput.match(/PLACE\s\d,\d,NORTH|EAST|SOUTH|WEST/):
                const placeDetails = trimedInput.match(/\d,\d,NORTH|EAST|SOUTH|WEST/).split(',');
                const x = parseInt(placeDetails[0]);
                const y = parseInt(placeDetails[1]);
                if (!carPark.canPlace(x, y)) {
                    error(message.invalidPlace);
                    return;
                }
                bus.move(x, y, placeDetails[2]);
        }

    });

}

run();
