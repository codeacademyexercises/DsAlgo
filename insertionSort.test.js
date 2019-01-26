const program = require('./insertionSort.js');

const testInput=[
    [25, 57, 37, 48, 12, 92, 86, 33],
    [25,57,37,28,29,23,24],
    [25,24],
    [10,1,5,3,7,9,2,4,8,6],
    [25, 14, 3, 16, 15],
    [],
    [1],
    [1000, 100, 200, 300, 250, 225, 220, 223, 224, 2000]
];

const testOutput=[
    [33, 37, 48, 57, 86, 92, 12, 25],
    [28, 29, 37, 57, 23, 24, 25],
    [25, 24],
    [5, 6, 7, 8, 9, 10, 1, 2, 3, 4],
    [15, 16, 25, 3, 14],
    [],
    [1],
    [224, 225, 250, 300, 1000, 2000, 100, 200, 220, 223]
];


describe('Testing insertion sort',()=>{
    it('Example test case',()=>{
        for(let i=0;i<testInput.length;i+=1){
            expect(program(testInput[i])).toEqual(testOutput[i]);
        }
    });
});