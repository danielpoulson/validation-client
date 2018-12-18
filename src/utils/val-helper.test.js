import getValStage from './val-helper';

test('When passed a number the validation stafe is returned that corresponds to that number.', () => {
    expect("Not Started").toEqual(getValStage(1));
});