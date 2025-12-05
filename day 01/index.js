import sample from './sample.js';
import puzzle from './puzzle.js';

const sample2 = sample.trim().split(/\n/g);
const puzzle2 = puzzle.trim().split(/\n/g);

// console.log({sample2});
// console.log({puzzle2});

const pickSafe = (list) => {
    let start = 50;
    let dir = '';
    let count = 0;
    
    for (let i = 0; i < list.length; i++) {
        dir = list[i].split('')[0];
        let val = Number(list[i].slice(1));

        dir === 'L' ? start -= val : start += val;
        
        while (start >= 100) {
            start -= 100;
        };
        
        while (start < 0) {
            start += 100;
        };
        
        if (start === 0) {
            count++;
        };
    };
    
    console.log('point: ', start); // point
    console.log('answer: ', count); // answer
    
    return count;
};

// console.log(pickSafe(sample2)); // point at 32, return 3
console.log(pickSafe(puzzle2)); // point at 90, return 984
