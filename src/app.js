import { info, success, error } from './utils/messageWriter';
import Bus from './bus';
import CarPark from './carPark';
import Simulator from './simulator';
import { carParkSize } from './utils/configuration';
import message from './utils/message';
import readline from 'readline';

const run = () => {
    const rl = readline.createInterface({
        input: process.stdin
    });

    const bus = new Bus(false);
    const carPark = new CarPark(carParkSize.width, carParkSize.height, bus);
    const simulator = new Simulator(carPark,bus);

    info(message.welcome);
    info(message.placeCommand);

    rl.on('line', (input) => { simulator.handleInput(input)});
}

run();
