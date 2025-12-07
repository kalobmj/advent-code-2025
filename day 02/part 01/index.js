import { readFileSync } from 'fs';

const sampleList = readFileSync("./advent2025/day 02/sample.txt", "utf8").split(/,/g);
const puzzleList = readFileSync("./advent2025/day 02/puzzle.txt", "utf8").split(/,/g);

// console.log(sampleList);
// console.log(puzzlelist);

const findInvalidIds = (list) => {
    let total = 0;

    for (let range of list) {
        let splitRanges = range.split(/-/);
        let rangeStart = Number(splitRanges[0]);
        let rangeEnd = Number(splitRanges[1]);

        for (let i = rangeStart; i <= rangeEnd; i++) {
            let numStr = i.toString();
            let currNumberLeft = numStr.slice(0, numStr.length / 2);
            let currNumberRight = numStr.slice(numStr.length / 2);

            // console.log({ currNumberLeft });
            // console.log({ currNumberRight });

            if (currNumberLeft === currNumberRight) {
                total += i;
            };
        };
    };

    return total;
};

// console.log(findInvalidIds(sampleList));
console.log(findInvalidIds(puzzleList)); // answer
