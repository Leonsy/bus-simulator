import { info, sucess, error } from './utils/messageWriter';
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
        console.log(`Received: ${input}`);
    });

}

run();
