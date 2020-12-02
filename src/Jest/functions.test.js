import functions from './functions.js';


//Tests on handle slide (x) and Y functions
test('X: Should be -180', () => {
    expect(functions.handleSlide(0)).toBe(-180);
});

test('X: Should be 180', () => {
    expect(functions.handleSlide(100)).toBe(180);
});

test('X: Should be 50', () => {
    expect(functions.handleSlide(51)).toBe(3.6);
});

test('X: Should be Falsy', () => {
    expect(functions.handleSlide(1030)).toBeFalsy();
});

test('X: Should be Falsy', () => {
    expect(functions.handleSlide("xval")).toBeFalsy();
});

test('Y: Should be -30', () => {
    expect(functions.handleSlideY(0)).toBe(-30);
});

test('Y: Should be 180', () => {
    expect(functions.handleSlideY(100)).toBe(30);
});

test('Y: Should be -18', () => {
    expect(functions.handleSlideY(20)).toBe(-18);
});

test('Y: Should be 28', () => {
    expect(functions.handleSlideY(90)).toBe(24);
});

test('Y: Should be Falsy', () => {
    expect(functions.handleSlideY(1030)).toBeFalsy();
});

test('Y: Should be Falsy', () => {
    expect(functions.handleSlideY("yval")).toBeFalsy();
});


//Tests on checkBreaks function
test('s: Should be Falsy', () => {
    expect(functions.checkBreaks(22)).toBeFalsy();
});

test('s: Should be IBV', () => {
    expect(functions.checkBreaks("Iron, IBV")).toBe("IBV");
});

test('s: Should be L', () => {
    expect(functions.checkBreaks("L5")).toBe("L");
});

test('s: Should be intact', () => {
    expect(functions.checkBreaks("Intacttest")).toBe("Intacttest");
});

test('s: Should be split', () => {
    expect(functions.checkBreaks("Split-test")).toBe("Split");
});


test('s: Should be CB', () => {
    expect(functions.checkBreaks("CB3")).toBe("CB");
});

//Aware this is not covered in function verifying it needs to be fixed
test('s: Should be CB, will return CBa', () => {
    expect(functions.checkBreaks("CBa")).not.toBe("CB");
});