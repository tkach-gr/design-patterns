class Soldier {
    constructor(weapon, hp, damage, atackRange) {
        this.weapon = weapon;
        this.hp = hp;
        this.damage = damage;
        this.atackRange = atackRange;
    }

    clone() {
        return new Soldier(this.weapon, this.hp, this.damage, this.atackRange);
    }
}

let prototypeKnight = new Soldier("sword", 20, 5, 2);
let prototypeArcher = new Soldier("bow", 10, 3, 15);

let army = [];

for(let i = 0; i < 5; i++) {
    army.push(prototypeKnight.clone());
}

for(let i = 0; i < 3; i++) {
    army.push(prototypeArcher.clone());
}

console.log(army);