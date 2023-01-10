export default class Character {
    constructor(name, type) {
        const list = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (name.length < 2 || name.length > 10 || name === undefined) {
            throw new Error('Имя не соответствует условиям. Пожалуйста, выберете другое.');
        }

        if (!list.includes(type)) {
            throw new Error('Не соответствие типу.');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        } else {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }
    }

    damage(points) {
        if (this.health === 0) {
            throw new Error('Это действие невозможно');
        } else {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
