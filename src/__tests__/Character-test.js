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

test('testing error with level', () => {
    const result = new Character('Sam', 'Daemon');
    result.health = 0;
    const test = () => result.levelUp();

    expect(test).toThrow('Нельзя повысить левел умершего');
});

test('testing levelUp', () => {
    const result = new Character('Rick', 'Zombie');
    result.levelUp();
    const obj = {
        name: 'Rick',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    };
    expect(result).toEqual(obj);
});

test('testing reeor with damge', () => {
    const result = new Character('Morty', 'Undead');
    result.health = 0;
    const test = () => result.damage(1);

    expect(test).toThrow('Это действие невозможно');
});

test('testing teking damage', () => {
    const result = new Character('Cratos', 'Magician');
    result.damage(5);
    const obj = {
        name: 'Cratos',
        type: 'Magician',
        health: 95,
        level: 1,
        attack: 10,
        defence: 40,
    };

    expect(result).toEqual(obj);
});
