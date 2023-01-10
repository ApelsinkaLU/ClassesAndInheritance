import Character from '../Character';

test('testing class Caracter', () => {
    const anyUser = new Character('anyName', 'Zombie');
    const obj = {
        name: 'anyName',
        type: 'Zombie',
        attack: undefined,
        defence: undefined,
        level: 1,
        health: 100,
    };

    expect(anyUser).toEqual(obj);
});

test('testing the correctness of the name', () => {
    const correctName = () => new Character('GutsTheBlackSwordsman', 'Swordsman');

    expect(correctName).toThrow('Имя не соответствует условиям. Пожалуйста, выберете другое.');
});

test('testing type matching', () => {
    const correctType = () => new Character('Geralt', 'Witcher');

    expect(correctType).toThrow('Не соответствие типу');
});
