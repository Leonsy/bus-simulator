# bus-simulator

## Description:
- This is a NodeJS command-line application written in ES6. It simulates a robot operated bus moving in a carpark, of dimensions 5 units x 5 units.
- It reads input from standard input, and write results to standard output
- There are no other obstructions in the carpark.
- The bus is free to roam around the carpark, but must be prevented from exiting the
carpark. Any movement that would result in the bus leaving the carpark must be prevented, however further valid movement commands must still be allowed.

## Commands
- PLACE X,Y,F (eg: PLACE 0,0,NORTH)
- MOVE
- LEFT
- RIGHT 
- REPORT
- QUIT

## System requirement
NODEJS 8 or newer

## Install
```
$ git clone https://github.com/Leonsy/bus-simulator.git
$ cd bus-simulator
$ npm install
```

# Run
Run with nodemon and babel enabled
```
$ npm start
```
Run compiled ES5 code
```
$ npm run-script serve
```

# Test
```
$ npm test
```

## License
The MIT License (MIT)
