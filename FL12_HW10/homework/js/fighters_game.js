class Fighter {
    constructor(obj) {
        this._name = obj.name,
            this._damage = obj.damage,
            this._hp = obj.hp,
            this._strength = obj.strength,
            this._agility = obj.agility,
            this.DEF_HP = obj.hp
        this._wins = 0
        this._losses = 0
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getHp() {
        return this._hp;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    attack(enemy) {
        const ATTACK_FORMULA_COEF = 100;
        let randonHitValue = Math.round(Math.random() * ATTACK_FORMULA_COEF);
        let enemyHitArea = ATTACK_FORMULA_COEF - (enemy.getStrength() + enemy.getAgility());
        if (randonHitValue > enemyHitArea) {
            console.log(`${this._name} attack missed`);
        } else {
            enemy._hp -= this._damage;
            console.log(`${this._name} makes ${this._damage} damage to ${enemy.getName()}`);
        }
    }
    heal(amount) {
        this._hp + amount > this.DEF_HP ? this._hp = this.DEF_HP : this._hp += amount;
    }
    dealDamage(amount) {
        this._hp - amount > 0 ? this._hp -= amount : this._hp = 0;
    }
    logCombatHistory() {
        return `Name: ${this._name}, Wins: ${this._wins}, Loses: ${this._losses}`;
    }
    addWin() {
        this._wins++;
    }
    addLoss() {
        this._losses++;
    }
}

function battleBegins(fighter1, fighter2) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    if (fighter2.getHp() < 0) {
        fighter1.addWin();
        fighter2.addLoss();
        fighter2._hp = 0;
        return console.log(`${fighter1.getName()} has won!`);
    } else if (fighter1.getHp() < 0) {
        fighter2.addWin();
        fighter1.addLoss();
        fighter1._hp = 0;
        return console.log(`${fighter2.getName()} has won!`);
    } else {
        battleBegins(fighter1, fighter2);
    }
}

function battle(fighter1, fighter2) {
    if (fighter1.getHp() <= 0) {
        console.warn(`${fighter1.getName()} is dead. Use heal to get him back`);
    } else if (fighter2.getHp() <= 0) {
        console.warn(`${fighter2.getName()} is dead. Use heal to get him back`);
    } else {
        battleBegins(fighter1, fighter2);
    }
}