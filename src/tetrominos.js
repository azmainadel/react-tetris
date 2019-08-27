//tetromino object definition
export const TETROMINOS = {
    0: {
        shape: [
            [0]
        ],
        color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 225, 230',  
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '35, 95, 225',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '226, 175, 35',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '225, 220, 35',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '50, 210, 35',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '135, 60, 200',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '230, 80, 80',
    }
}

//generate random tetromino object
export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randomTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];

    return TETROMINOS[randomTetromino];
}