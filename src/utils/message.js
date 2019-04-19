import { carParkSize } from './configuration';

const message = {
    welcome: 'Welcome to bus simulator.',
    carParkSize: `This car park is ${carParkSize.width} x ${carParkSize.height}`,
    placeCommand: 'Please PLACE the bus in the carpark in position X,Y and facing NORTH, SOUTH, EAST or WEST. (example: )',
    invalidCommand: 'Invalid command',
    invalidPlace: 'Can not place the bus at this position',
    invalidDirection: 'Please provide a valid direction',
    moveSuccess: 'You successfully moved the bus'
}

export default message;