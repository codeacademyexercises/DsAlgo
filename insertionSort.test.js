const program = require('./insertionSort.js');

const testInput=[
    [25, 57, 37, 48, 12, 92, 86, 33],
    [25,57,37,28,29,23,24],
    [25,24]
];

const testOutput=[
    [33, 37, 48, 57, 86, 92, 12, 25],
    [28,29,37,57,23,24,25],
    [25,24]
];


describe('Testing insertion sort',()=>{
    it('Example test case',()=>{
        for(let i=0;i<testInput.length;i+=1){
            expect(program(testInput[i])).toEqual(testOutput[i]);
        }
    });
});