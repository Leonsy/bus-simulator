import chai from 'chai';
import CarPark from '../src/carPark';
import Bus from '../src/bus';
import { carParkSize, directionName } from '../src/utils/configuration';

const expect = chai.expect;

describe('Test CarPark', () => {
    let carPark;
    let bus;

    before(() => {
        process.env.NODE_ENV = 'test';
    });

    beforeEach(() => {
        bus = new Bus(false);
        carPark = new CarPark(carParkSize.width, carParkSize.height, bus);
    });

    it('Should detect a valid PLACE location', () => {
        expect(carPark.canPlace(4,4)).to.be.true;
    });

    it('Should detect an invalid PLACE location', () => {
        expect(carPark.canPlace(5,5)).to.be.false;
    });

    it('Should detect a valid MOVE', () => {
        bus.place(1,1,directionName.NORTH);
        expect(carPark.canMove()).to.be.true;
    });

    it('Should detect an invalid MOVE', () => {
        bus.place(4,4,directionName.NORTH);
        expect(carPark.canMove()).to.be.false;
    });

});