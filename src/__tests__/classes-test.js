import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('testing class Bowerman', () => {
    const boverman = new Bowerman('Bill', 'Bowerman');
    const obj = {
        attack: 25,
        defence: 25,
        level: 1,
        health: 100,
        name: 'Bill',
        type: 'Bowerman',
    };

    expect(boverman).toEqual(obj);
});

test('testing class Daemon', () => {
    const daemon = new Daemon('Molly', 'Daemon');
    const obj = {
        attack: 10,
        defence: 40,
        level: 1,
        health: 100,
        name: 'Molly',
        type: 'Daemon',
    };

    expect(daemon).toEqual(obj);
});

test('testing class Magician', () => {
    const magician = new Magician('Gandalf', 'Magician');
    const obj = {
        attack: 10,
        defence: 40,
        level: 1,
        health: 100,
        name: 'Gandalf',
        type: 'Magician',
    };

    expect(magician).toEqual(obj);
});

test('testing class Swordsman', () => {
    const swordsman = new Swordsman('Guts', 'Swordsman');
    const obj = {
        attack: 40,
        defence: 10,
        level: 1,
        health: 100,
        name: 'Guts',
        type: 'Swordsman',
    };

    expect(swordsman).toEqual(obj);
});

test('testing class Undead', () => {
    const undead = new Undead('Felix', 'Undead');
    const obj = {
        attack: 25,
        defence: 25,
        level: 1,
        health: 100,
        name: 'Felix',
        type: 'Undead',
    };

    expect(undead).toEqual(obj);
});

test('testing class Zombie', () => {
    const zombie = new Zombie('Bobby', 'Zombie');
    const obj = {
        attack: 40,
        defence: 10,
        level: 1,
        health: 100,
        name: 'Bobby',
        type: 'Zombie',
    };

    expect(zombie).toEqual(obj);
});
