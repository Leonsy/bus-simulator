import chai from 'chai';
import CarPark from '../src/carPark';
import Bus from '../src/bus';
import { carParkSize, directionName, command } from '../src/utils/configuration';

const expect = chai.expect;

describe('Test Bus', () => {
    let carPark;
    let bus;

    before(() => {
        process.env.NODE_ENV = 'test';
    });

    beforeEach(() => {
        bus = new Bus(false);
        carPark = new CarPark(carParkSize.width, carParkSize.height, bus);
    });

    it('Bus should not be in the car park at the beginning', () => {
        expect(bus.isInCarPark).to.be.false;
    });

    it('Coordinates should be undefined at start', () => {
        expect(
            bus.xCoordinate === undefined &&
            bus.yCoordinate === undefined &&
            bus.direction === undefined).to.be.true;
    });

    it('Should place the bus at the right position', () => {
        bus.place(1,1,directionName.NORTH);
        expect(bus.xCoordinate).to.equal(1);
        expect(bus.yCoordinate).to.equal(1);
        expect(bus.direction).to.equal(directionName.NORTH);
    });

    it('Should report the right position', () => {
        bus.place(1,1,directionName.NORTH);
        const {xCoordinate, yCoordinate, direction } = bus.report();
        expect(xCoordinate).to.equal(1);
        expect(yCoordinate).to.equal(1);
        expect(direction).to.equal(directionName.NORTH);
    });

    it('Should perform a correct MOVE', () => {
        bus.place(2,2,directionName.NORTH);
        bus.move();
        expect(bus.xCoordinate).to.equal(2);
        expect(bus.yCoordinate).to.equal(3);
        expect(bus.direction).to.equal(directionName.NORTH);
    });

    it('Should perform a correct LEFT', () => {
        bus.place(2,1,directionName.NORTH);
        bus.turn(command.LEFT);
        expect(bus.xCoordinate).to.equal(2);
        expect(bus.yCoordinate).to.equal(1);
        expect(bus.direction).to.equal(directionName.WEST);
    });

    it('Should perform a correct RIGHT', () => {
        bus.place(2,1,directionName.NORTH);
        bus.turn(command.RIGHT);
        expect(bus.xCoordinate).to.equal(2);
        expect(bus.yCoordinate).to.equal(1);
        expect(bus.direction).to.equal(directionName.EAST);
    });

});