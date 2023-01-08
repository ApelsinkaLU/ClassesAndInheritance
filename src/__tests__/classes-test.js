import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('testing class Bowerman', () => {
    const boverman = new Bowerman();
    const obj = {
        attack: 25,
        defence: 25,
        level: 1,
        health: 100,
    };

    expect(boverman).toEqual(obj);
});

test('testing class Daemon', () => {
    const daemon = new Daemon();

    expect(daemon).toEqual({
        attack: 10,
        defence: 40,
        level: 1,
        health: 100,
    });
});

test('testing class Magician', () => {
    const magician = new Magician();

    expect(magician).toEqual({
        attack: 10,
        defence: 40,
        level: 1,
        health: 100,
    });
});

test('testing class Swordsman', () => {
    const swordsman = new Swordsman();

    expect(swordsman).toEqual({
        attack: 40,
        defence: 10,
        level: 1,
        health: 100,
    });
});

test('testing class Undead', () => {
    const undead = new Undead();

    expect(undead).toEqual({
        attack: 25,
        defence: 25,
        level: 1,
        health: 100,
    });
});

test('testing class Zombie', () => {
    const zombie = new Zombie();

    expect(zombie).toEqual({
        attack: 40,
        defence: 10,
        level: 1,
        health: 100,
    });
});
