import Character from '../Character';

test('testing class Caracter', () => {
    const anyUser = new Character('anyName', 'Zombie');

    expect(anyUser).toEqual({
        name: 'anyName',
        type: 'Zombie',
        attack: 0,
        defence: 0,
        level: 1,
        health: 100,
    });
});

test('testing the correctness of the name', () => {
    const correctName = () => new Character('GutsTheBlackSwordsman', 'Swordsman');

    expect(correctName).toThrow('Имя не соответствует условиям. Пожалуйста, выберете другое.');
});

test('testing type matching', () => {
    const correctType = () => new Character('Geralt', 'Witcher');

    expect(correctType).toThrow('Не соответствие типу');
});
