import chai from 'chai';
import CarPark from '../src/carPark';
import Bus from '../src/bus';
import App from '../src/app';
import Simulator from '../src/simulator';
import { carParkSize, directionName } from '../src/utils/configuration';

const expect = chai.expect;

describe('Test Simulator', () => {
    let carPark;
    let bus;
    let simulator;

    before(() => {
        process.env.NODE_ENV = 'test';
    });

    beforeEach(() => {
        bus = new Bus(false);
        carPark = new CarPark(carParkSize.width, carParkSize.height, bus);
        simulator = new Simulator(carPark, bus);
    });

    it('Should not take commands other than PLACE at the beginning', () => {
        simulator.handleInput('MOVE');
        simulator.handleInput('LEFT');
        simulator.handleInput('RIGHT');
        simulator.handleInput('REPORT');
        expect(bus.isInCarPark).to.be.false;  
    });

    it('Should not respond to invalid input', () => {
        simulator.handleInput('TTTT');
        expect(bus.isInCarPark).to.be.false;  
    });

    it('Should get the correct result by getting valid commands', () => {
        simulator.handleInput('PLACE 4,4,SOUTH');
        simulator.handleInput('MOVE');
        simulator.handleInput('RIGHT');
        simulator.handleInput('MOVE');
        simulator.handleInput('MOVE');
        simulator.handleInput('RIGHT');
        const { xCoordinate, yCoordinate, direction } = bus.report();
        expect(xCoordinate).to.equal(2);
        expect(yCoordinate).to.equal(3);
        expect(direction).to.equal(directionName.NORTH);
    });

    it('Should get the correct result by getting valid and invalid commands', () => {
        simulator.handleInput('PLACE 4,4,SOUTH');
        simulator.handleInput('MOVE');
        simulator.handleInput('PLACE');
        simulator.handleInput('MOEE');
        simulator.handleInput('LEFT');
        const { xCoordinate, yCoordinate, direction } = bus.report();
        expect(xCoordinate).to.equal(4);
        expect(yCoordinate).to.equal(3);
        expect(direction).to.equal(directionName.EAST);
    });

});