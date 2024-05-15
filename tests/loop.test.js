const loopNumbers = require('../loop');

test('loop from 1 to 10', () =>{
    expect(loopNumbers()).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
})