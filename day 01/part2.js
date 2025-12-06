import sample from './sample.js';
import puzzle from './puzzle.js';

const sample2 = sample.trim().split(/\n/g);
const puzzle2 = puzzle.trim().split(/\n/g);

// console.log({sample2});
// console.log({puzzle2});

const pickSafe = (list) => {
    let start = 50;
    let place = start;
    let zeroCounter = 0;

    for (let i = 0; i < list.length; i++) {
        let direction = list[i][0];
        let rotations = Number(list[i].split('').slice(1).join(''));

        // console.log({ direction });
        // console.log({ rotations });
        
        if (direction === 'L') {
            for (let j = 0; j < rotations; j++) {
                place--;
                if (place < 0) { place = 99 };
                if (place === 0) {
                    zeroCounter++;
                };
            };
        };

        if (direction === 'R') {
            for (let k = 0; k < rotations; k++) {
                place++;
                if (place > 99) { place = 0 };
                if (place === 0) {
                    zeroCounter++;
                };
            };
        };
    };

    console.log({ zeroCounter }); // answer
    
    return zeroCounter;
};

// console.log(pickSafe(sample2)); // point at 32, return 3
console.log(pickSafe(puzzle2)); // point at 90, return 984
