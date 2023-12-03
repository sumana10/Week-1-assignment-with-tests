const DrawingBoard = require('../hard/drawingBoard');

describe('DrawingBoard', () => {
let drawingBoard;

beforeEach(() => {
drawingBoard = new DrawingBoard();
});

test('draw and getAllShapes', () => {
drawingBoard.draw('Circle');
drawingBoard.draw('Rectangle');
drawingBoard.draw('Triangle');

expect(drawingBoard.getAllShapes()).toEqual([
'Circle',
'Rectangle',
'Triangle',
]);
});

test('erase', () => {
drawingBoard.draw('Circle');
drawingBoard.draw('Rectangle');
drawingBoard.draw('Triangle');

drawingBoard.erase(1);
expect(drawingBoard.getAllShapes()).toEqual(['Circle', 'Triangle']);

drawingBoard.erase(0);
expect(drawingBoard.getAllShapes()).toEqual(['Triangle']);

drawingBoard.erase(2);
expect(drawingBoard.getAllShapes()).toEqual(['Triangle']);
});

test('updateShape', () => {
drawingBoard.draw('Circle');
drawingBoard.draw('Rectangle');
drawingBoard.draw('Triangle');

drawingBoard.updateShape(1, 'Updated Rectangle');
expect(drawingBoard.getShape(1)).toBe('Updated Rectangle');

drawingBoard.updateShape(3, 'Invalid Shape');
expect(drawingBoard.getAllShapes()).toEqual([
'Circle',
'Updated Rectangle',
'Triangle',
]);
});

test('getShape', () => {
drawingBoard.draw('Circle');
drawingBoard.draw('Rectangle');
drawingBoard.draw('Triangle');

expect(drawingBoard.getShape(0)).toBe('Circle');
expect(drawingBoard.getShape(2)).toBe('Triangle');
expect(drawingBoard.getShape(3)).toBeNull();
});

test('clearAllShapes', () => {
drawingBoard.draw('Circle');
drawingBoard.draw('Rectangle');
drawingBoard.draw('Triangle');

drawingBoard.clearAllShapes();
expect(drawingBoard.getAllShapes()).toEqual([]);
});

test('erase and updateShape with invalid indexes', () => {
drawingBoard.draw('Circle');
drawingBoard.draw('Rectangle');

drawingBoard.erase(5);
expect(drawingBoard.getAllShapes()).toEqual(['Circle', 'Rectangle']);

drawingBoard.updateShape(3, 'Updated Shape');
expect(drawingBoard.getAllShapes()).toEqual(['Circle', 'Rectangle']);
});

test('draw duplicate shapes', () => {
drawingBoard.draw('Circle');
drawingBoard.draw('Rectangle');
drawingBoard.draw('Circle');
drawingBoard.draw('Triangle');

expect(drawingBoard.getAllShapes()).toEqual([
'Circle',
'Rectangle',
'Circle',
'Triangle',
]);
});
});