export const directionName = {
    NORTH: 'NORTH',
    SOUTH: 'SOUTH',
    EAST: 'EAST',
    WEST: 'WEST'
}

export const carParkSize = {
    width: 5,
    height: 5
}

export const command = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    MOVE: 'MOVE',
    REPORT: 'REPORT',
    QUIT: 'QUIT'
}

export const regex = {
    validCommand: /PLACE\s\S|MOVE|LEFT|RIGHT|REPORT/,
    validPlaceCommand: /PLACE\s\d,\d,(NORTH|EAST|SOUTH|WEST)/,
    validPlaceDetail: /\d,\d,(NORTH|EAST|SOUTH|WEST)/
}

