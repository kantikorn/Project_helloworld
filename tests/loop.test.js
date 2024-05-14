const loopNumbers = require('../loop');

test('loop from 1 to 10', () =>{
    const numbers = loopNumbers();
    for (const num of numbers) {
        expect(num).toBeLessThanOrEqual(15); // ตรวจสอบว่าตัวเลขทั้งหมดไม่เกิน 10
    }
});
